"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import stationUrl from "../../image/station2.png";
import Compas from "../compas/page";

export default function StationFirsrt({}) {

    useEffect(() => {
    }, []);

    return (
        <>
            <div className={styles.container}>
                <Image
                    alt="Station-img"
                    src={stationUrl}
                    placeholder="blur"
                    quality={100}
                    width={600}
                    height={800}
                />
                <div className={styles.compas}>
                    <Compas />
                </div>
            </div>
        </>

    );
}