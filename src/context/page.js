"use client"
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isLoadingContext, setIsLoadingContext] = useState(true);
    const [isErrorContext, setIsErrorContext] = useState(false);
    const [isTimerStartContext, setIsTimerStartContext] = useState(false);
    const [isTimerFinishedContext, setIsTimerFinishedContext] = useState(false);

    return (
        <AppContext.Provider value={{
            isLoadingContext,
            setIsLoadingContext,
            isErrorContext,
            setIsErrorContext,
            isTimerStartContext,
            setIsTimerStartContext,
            isTimerFinishedContext,
            setIsTimerFinishedContext
        }}>
            {children}
        </AppContext.Provider>
    );
};