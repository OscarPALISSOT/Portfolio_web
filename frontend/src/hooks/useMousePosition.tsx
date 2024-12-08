import { useState, useEffect } from 'react';

const useMousePosition = (): MousePositionType => {

    const [mousePosition, setMousePosition] = useState<MousePositionType>({ x: 0, y: 0 });

    useEffect(() => {

        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return mousePosition;
};

export default useMousePosition;