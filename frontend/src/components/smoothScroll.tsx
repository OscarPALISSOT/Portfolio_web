'use client';

import {LenisRef, ReactLenis} from 'lenis/react'
import {ReactNode, useEffect, useRef} from "react";
import {cancelFrame, frame} from "motion";

interface SmoothScrollProps {
    children: ReactNode;
}

const SmoothScroll = ({children}: SmoothScrollProps) => {

    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        function update(data: { timestamp: number }) {
            lenisRef.current?.lenis?.raf(data.timestamp)
        }

        frame.update(update, true)

        return () => cancelFrame(update)
    }, [])


    return (
        <ReactLenis root options={{autoRaf: false, easing: (x: number): number => {
            return Math.sin((x * Math.PI) / 2);
        }}} ref={lenisRef}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;