"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useAppContext } from "@/context/page";
import StepsCircle from "../steps-circle/page";

function CountdownTimer({ initialSeconds = 60 }) {
    const {
        isLoadingContext,
        setIsLoadingContext,
        isErrorContext,
        setIsErrorContext,
        isTimerStartContext,
        setIsTimerStartContext,
        isTimerFinishedContext,
        setIsTimerFinishedContext
    } = useAppContext();
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        setIsTimerFinishedContext(false);

        if (seconds <= 0) {
            setIsTimerFinishedContext(true);
            return;
        }

        const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    useEffect( () => {
        if (isTimerStartContext) {
            setSeconds(initialSeconds)
        }
    }, [isTimerStartContext])

    if (isLoadingContext) {
        return (
            <>
                <StepsCircle text="Loading"/>
            </>
        )
    }

    if (isErrorContext) {
        return (
            <>
                <StepsCircle text="Error"/>
            </>
        )
    }


    return (
        <div className={styles.timerTitle}>
            <h2>
                Time Left:
            </h2>
            <h2>
                {seconds}s
            </h2>
        </div>
    );
}

export default CountdownTimer;