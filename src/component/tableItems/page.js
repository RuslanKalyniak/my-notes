"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useAppContext } from "@/context/page";
import StepsSmall from "../stepsSmall/page";

export default function TableItems({ data }) {
    const [currentItem, setCurrentItem] = useState(0);
    const [progress, setProgress] = useState(0); // Для оновлення прогресу лоадера

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentItem((prevItem) => (prevItem + 1) % 3);
            setProgress(0); // Скидання прогресу після зміни
        }, 20000);

        // Інтервал для оновлення прогресу
        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) return 100;
                return prevProgress + 5; // Оновлення прогресу кожні 1 сек (20 секунд / 5% = 1 сек)
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, []);

    return (
        <div className={styles.tableItemsMain}>
            {/* Відображення прогрес-бару */}
            <div className={styles.progressBar}>
                <div
                    className={styles.progressBarFill}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {currentItem === 0 && (
                <div className={styles.tableItems0}>
                    <div className={styles.tableItems0Counter}>{data.start}</div>
                    <div className={styles.tableItems0Steps}>
                        <StepsSmall stepsCount={6} animationDuration={1.5} />
                    </div>
                    <p>{data.name}</p>
                </div>
            )}

            {currentItem === 1 && (
                <div className={styles.tableItems0}>
                    <div className={styles.tableItems1Counter}>{data.in}</div>
                    <div className={styles.tableItems1Steps}>
                        <StepsSmall stepsCount={12} animationDuration={4.5} />
                    </div>
                    <p>{data.name}</p>
                    <div className={styles.tableItems1CounterDown}>{data.out}</div>
                </div>
            )}

            {currentItem === 2 && (
                <div className={styles.tableItems0}>
                    <div className={styles.tableItems0Counter}>{data.final}</div>
                    <div className={styles.tableItems0Steps}>
                        <StepsSmall stepsCount={6} animationDuration={1.5} />
                    </div>
                    <p>{data.name}</p>
                </div>
            )}
        </div>
    );
}