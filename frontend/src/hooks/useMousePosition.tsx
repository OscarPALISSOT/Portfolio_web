import { useState, useEffect } from 'react';

interface MousePosition {
    clientX: number;
    clientY: number;
}

const useMousePosition = (): MousePosition => {

    const [mousePosition, setMousePosition] = useState<MousePosition>({ clientX: 0, clientY: 0 });

    useEffect(() => {

        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                clientX: event.clientX,
                clientY: event.clientY
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