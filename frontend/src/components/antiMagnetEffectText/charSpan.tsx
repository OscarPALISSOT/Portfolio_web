import React, {useEffect, useRef, useState} from "react";
import useMousePosition from "@/hooks/useMousePosition";
import {motion} from "motion/react";

interface CharSpanProps {
    char: string;
    index: number;
    enteredIndex: number|null;
    setEnteredIndex: (index: number|null) => void;
}

const CharSpan = ({char, index, setEnteredIndex, enteredIndex}: CharSpanProps) => {

    const spanRef = useRef<HTMLSpanElement | null>(null);
    const {clientX, clientY} = useMousePosition();
    const [position, setPosition] = useState({x: 0, y: 0});
    const [rect, setRect] = useState({width: 0, height: 0, left: 0, top: 0});

    useEffect(() => {
        if (spanRef.current){
            setRect(spanRef.current.getBoundingClientRect());
        }
    }, []);

    useEffect(() => {
        if (clientX - (rect.left - rect.width / 2) > 0 && clientX - (rect.left + rect.width / 2) < 0 && clientY - (rect.top + (1.5 * rect.height)) < 0 && clientY - (rect.top - rect.height / 2) > 0) {
            setEnteredIndex(index);
        } else if (index === enteredIndex){
            setEnteredIndex(null);
        }
    }, [clientX, clientY, rect.left , rect.top, index, setEnteredIndex, rect.height, rect.width, enteredIndex]);

    useEffect(() => {
        const indexRatio = rect.left + ((enteredIndex! - index) * rect.width);
        const yRatio = 1 - Math.min(1, Math.max(0,Math.abs(clientY - rect.top - rect.height / 2) / rect.height / 2));
        if (enteredIndex !== null && index + 1 > enteredIndex && char !== ' ') {
            setPosition({x:(clientX - indexRatio + 24) * yRatio, y: 0});
        } else if (enteredIndex !== null && index < enteredIndex && clientX - rect.left && char !== ' ') {
            setPosition({x: (clientX - indexRatio - 24) * yRatio, y: 0});
        } else {
            setPosition({x: 0, y: 0});
        }
    }, [enteredIndex, clientX,clientY, index, rect.width, rect.left, rect.top, rect.height, char]);

    const {x, y} = position;
    return (
        <motion.span
            ref={spanRef}
            animate={{x, y}}
            transition={{duration: 0.15, type: 'spring', bounce:0.8, mass: 0.2, damping: 3, stiffness: 150}}
            className={'inline-block'}
            style={{whiteSpace: char === ' ' ? 'pre' : undefined}}
        >
            {char}
        </motion.span>
    )

}

export default CharSpan;