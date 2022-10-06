import React, { createContext, useContext } from "react";

import { names } from '../data';

// 1. Create a context
const NamesContext = createContext()

// 2. Context provider
export function NamesProvider({ children }) {
    return (
        <NamesContext.Provider value={ names }>{ children }</NamesContext.Provider>
    )
}

// Custom Hook to avoid multiple imports on different components
export function useNames() {
    const context = useContext(NamesContext)
    if (!context) {
        throw new Error('You probably forgot a <NamesProvider> context provider')
    }
    return context;
}