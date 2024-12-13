import {useContext, useCallback, MouseEventHandler} from "react";
import {CursorContext} from "@/components/cursor/cursorContext";

interface CursorHandlersOptions {
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}

const useCursorHandlers = (options: CursorHandlersOptions = {}) => {

    const [, setCursor] = useContext(CursorContext);

    const toggleCursor = () => {
        setCursor(({ active }) => ({ active: !active }));
    };

    const onMouseEnter: MouseEventHandler = useCallback(event => {
        if (options.onMouseEnter) {
            options.onMouseEnter(event);
        }
        toggleCursor();
    }, [options, toggleCursor]);

    const onMouseLeave: MouseEventHandler = useCallback(event => {
        if (options.onMouseLeave) {
            options.onMouseLeave(event);
        }
        toggleCursor();
    }, [options, toggleCursor]);

    return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;