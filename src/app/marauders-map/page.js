"use client"

import styles from "./page.module.css";
import Steps from '../../component/steps/page';
import StepsCircle from '../../component/steps-circle/page';
import Compas from "@/component/compas/page";
import Background from "@/component/background/page";
import Title from "@/component/title/page";
import Station from "@/component/station/page";
import StationFirsrt from "@/component/stationFirsrt/page";
import Table from "@/component/table/page";
import CountdownTimer from "@/component/countdownTimer/page";
import BackgroundTitle from "@/component/backgroundTitle/page";
import { use, useEffect, useState } from "react";

export default function Map() {
    const [state, setStateClass] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        console.log(screenWidth, 'screenWidth')
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {/* --- */}
            {/* --- */}
            {/* --- */}
            <BackgroundTitle setStateClass={setStateClass} />
            {state && (
                <div className={styles.container}>
                    <div className={styles.content}>
                        {/* --- */}
                        {/* --- */}
                        {/* --- */}
                        <div className={styles.title}>
                            <StationFirsrt />
                            <div className={styles.titleContainer}>
                                <Title />
                                <CountdownTimer initialSeconds={60} />
                            </div>
                            <Station />
                        </div>
                        {/* --- */}
                        {/* --- */}
                        {/* --- */}
                        <div>
                            <Table />
                        </div>
                        {/* --- */}
                        {/* --- */}
                        {/* --- */}
                    </div>
                </div>

            )}
            <Background />
            {/* <div className={styles.containerMap}>
                <div className={styles.containerMapRoom}>
                    <Steps stepsCount={5} animationDuration={2.5} />
                    <Steps stepsCount={15} animationDuration={2.5}/>
                    <Steps stepsCount={10} animationDuration={8}/>
                </div>
            </div> */}
            {/* --- */}
            {/* --- */}
            {/* --- */}
        </>
    )
}