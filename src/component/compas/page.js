"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import imageUrl1 from "../../image/Arrow1.png";
import imageUrl2 from "../../image/Arrow2.png";
import imageUrl3 from "../../image/Arrow3.png";

export default function Compas({}) {
    const [rotateClass, setRotateClass] = useState("");
    const [scalleClass, setScalleClass] = useState("");
    const [compasLetterValue, setCompasLetterValue] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRotateClass(styles.fullRotation);
        }, 250);
        setTimeout(() => {
            setScalleClass(styles.fullScale);
        }, 250);
        setTimeout(() => {
            setCompasLetterValue(true);
        }, 1750);
    }, []);

    return (
    <div className={styles.compas}>
        <div className={styles.compasBody}>
            <div className={`${styles.compasCircle} ${scalleClass}`}>
                <Image
                    src={imageUrl2}
                    quality={100}
                    width={200}
                    height={160}
                    alt="Compas"
                />
            </div>
            <div className={`${styles.compasArrow} ${rotateClass}`}>
                <Image
                    src={imageUrl1}
                    quality={100}
                    width={70}
                    height={184}
                    alt="Main Arrow"
                />
            </div>
            { compasLetterValue && (
                <div className={styles.compasLetter}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="black"
                        strokeWidth="3"
                    >
                        <defs>
                            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0, 0, 0, 1.5)" />
                            </filter>
                        </defs>
                        <path
                            d="M2,18 L2,2 L18,18 L18,2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="58"
                            strokeDashoffset="58"
                            style={{ filter: "url(#shadow)" }}
                            className={styles.compasLetterSvg}
                        />
                    </svg>
                </div>
            )}
        </div>
    </div>
    );
}