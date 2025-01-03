"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function StepsCircle({text}) {

    return (
        <div className={styles.footsteps}>
            <h2>{text}</h2>
            {Array.from({ length: 17 }, (_, index) => {
                // Скорочуємо час зникання для попередніх слідів
                const animationDuration = 12.5 - index * 4;

                return (
                    <div key={index} className={`${styles[`footstepsContainer${index}`]}`}>
                        <span
                            className={`${styles.footstepsLeft}`}
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="40px" viewBox="0 0 515.458 515.458">
                                <path d="M220.752,225.463c7.607-29.646,11.36-79.095,4.909-114.32
                                        C213.919,47.067,188.931,9.924,155.11,1.105C82.975-9.463,73.919,57.981,72.093,109.399
                                        c-4.031,28.768,20.294,139.802,49.911,160.711c29.149-7.353,57.771-14.558,86.696-21.078
                                        C216.162,245.069,213.798,246.352,220.752,225.463z
                                        M129.029,293.132c13.547,171.234,175.47,103.231,87.63-26.427
                                        C188.854,276.228,164.304,282.292,129.029,293.132z"/>
                            </svg>
                        </span>
                        <span
                            className={`${styles.footstepsRight}`}
                            style={{
                                animationDelay: `${index * 0.1 + 0.1}s`,
                            }}
                        >
                            <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="40px" viewBox="0 0 515.458 515.458">
                                <path d="M443.366,229.409c-1.826-51.415-10.882-118.86-83.017-108.292c-33.815,8.825-58.8,45.962-70.551,110.035
                                        c-6.454,35.229-2.701,84.678,4.912,114.32c6.951,20.889,4.587,19.605,12.058,23.572c28.916,6.514,57.542,13.725,86.693,21.078
                                        C423.075,369.209,447.397,258.182,443.366,229.409z
                                        M298.794,386.711c27.805,9.522,52.357,15.587,87.633,26.427C372.875,584.374,210.952,516.371,298.794,386.711z"/>
                            </svg>
                        </span>
                    </div>
                );
            })}
        </div>
    );
}