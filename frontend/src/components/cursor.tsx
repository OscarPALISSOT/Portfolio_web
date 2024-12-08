'use client';

import {useEffect, useRef} from "react";

const Cursor = () => {

    const followRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    const positionRef = useRef({
        mouse: { x: 0, y: 0 },
        destination: { x: 0, y: 0 },
        distance: { x: 0, y: 0 },
        key: -1,
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (followRef.current) {
                positionRef.current.mouse.x = event.clientX - followRef.current.clientWidth/2 - 1;
                positionRef.current.mouse.y = event.clientY - followRef.current.clientHeight/2 - 1;
            }
            if (cursorRef.current){
                cursorRef.current.style.transform = `translate3d(${event.clientX - 3}px, ${event.clientY - 3}px, 0)`;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
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
            if (followRef.current) {
                followRef.current.style.transform = `translate3d(${destination.x}px, ${destination.y}px, 0)`;
            }
            return () => {
                cancelAnimationFrame(positionRef.current.key);
            };
        };
        followMouse();
    }, []);

    return (
        <>
            <div
                className={"absolute left-0 top-0 z-[9999] pointer-events-none h-1.5 w-1.5 bg-text rounded-full"}
                ref={cursorRef}
            />
            <div
                className={"absolute left-0 top-0 z-[9999] pointer-events-none h-10 w-10 border border-text rounded-full"}
                ref={followRef}
            />
        </>
    )
}

export default Cursor;