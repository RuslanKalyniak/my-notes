"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import stationUrl from "../../image/station1.png";

export default function Station({}) {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.titleContainer}>
        <Image
            alt="Station-img"
            src={stationUrl}
            placeholder="blur"
            quality={100}
            width={600}
            height={800}
        />
    </div>
    );
}