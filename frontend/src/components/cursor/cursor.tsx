'use client';

import {useContext, useEffect, useRef} from "react";
import {CursorContext} from "@/components/cursor/cursorContext";

const Cursor = () => {

    const followRefWrapper = useRef<HTMLDivElement>(null);
    const followRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursor] = useContext(CursorContext)


    const positionRef = useRef({
        mouse: { x: 0, y: 0 },
        destination: { x: 0, y: 0 },
        distance: { x: 0, y: 0 },
        key: -1,
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (followRefWrapper.current) {
                positionRef.current.mouse.x = event.clientX - followRefWrapper.current.clientWidth/2;
                positionRef.current.mouse.y = event.clientY - followRefWrapper.current.clientHeight/2 + window.scrollY;
            }
            if (cursorRef.current){
                cursorRef.current.style.transform = `translate3d(${event.clientX - 3}px, ${event.clientY - 3 + window.scrollY}px, 0)`;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let isMouseDown = false;
        const handleMouseDown = () => {
            isMouseDown = true
        }
        const handleMouseUp = () => {
            isMouseDown = false
        }
        const followMouse = () => {

            positionRef.current.key = requestAnimationFrame(followMouse);
            const {
                mouse,
                destination,
                distance,
            } = positionRef.current;

            if (!destination.x || !destination.y) {
                positionRef.current.destination.x = mouse.x;
                positionRef.current.destination.y = mouse.y;
            } else {
                positionRef.current.distance.x = (mouse.x - destination.x) * 0.12;
                positionRef.current.distance.y = (mouse.y - destination.y) * 0.12;
                if (
                    Math.abs(positionRef.current.distance.x) +
                    Math.abs(positionRef.current.distance.y) <
                    0.1
                ) {
                    positionRef.current.destination.x = mouse.x;
                    positionRef.current.destination.y = mouse.y;
                } else {
                    positionRef.current.destination.x += distance.x;
                    positionRef.current.destination.y += distance.y;
                }
            }
            if (followRefWrapper.current && followRef.current) {
                followRefWrapper.current.style.transform = `translate3d(${destination.x}px, ${destination.y}px, 0)`;
                followRef.current.style.transform = `scale(${isMouseDown ? 0.8 : 1})`;
            }
            return () => {
                cancelAnimationFrame(positionRef.current.key);
            };
        };
        followMouse();
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, []);

    return (
        <>
            <div
                className={`hidden lg:block absolute left-0 top-0 z-[9999] pointer-events-none h-1.5 w-1.5 border-background dark:border-text bg-background dark:bg-text rounded-full transition-colors duration-300 ${cursor.active && 'border bg-transparent dark:bg-transparent'}`}
                ref={cursorRef}
            />
            <div
                className={`hidden lg:block absolute left-0 top-0 z-[9999] pointer-events-none origin-center`}
                ref={followRefWrapper}
            >
                <div
                    className={`hidden lg:block pointer-events-none rounded-full bg-transparent border transition-all duration-150 before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-backgroundHover dark:before:bg-textHover before:transition before:duration-500 before:rounded-full ${cursor.active ? 'border-transparent h-12 w-12 before:scale-100' : 'border-background dark:border-text h-10 w-10 before:scale-0'}`}
                    ref={followRef}
                />
            </div>
        </>
    )
}

export default Cursor;