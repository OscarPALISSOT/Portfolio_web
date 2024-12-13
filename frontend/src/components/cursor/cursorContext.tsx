'use client';

import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

export const CursorContext = createContext<[{ active: boolean }, Dispatch<SetStateAction<{active: boolean}>>]>([{ active: false }, () => {}]);

interface CursorContextProviderProps {
    children: ReactNode;
}

const CursorContextProvider = ({children}: CursorContextProviderProps) => {

    const [cursor, setCursor] = useState({active: false});

    return (
        <CursorContext.Provider value={[cursor, setCursor]}>
            {children}
        </CursorContext.Provider>
    )
}

export default CursorContextProvider;