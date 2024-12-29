"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import title from "../../image/Title2.png";

export default function Title({}) {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.titleContainer}>
        <Image
            className={styles.title}
            alt="title-img"
            src={title}
            placeholder="blur"
            quality={100}
            width={400}
            height={350}
            layout="responsive"
            loading="lazy"
            objectFit="cover"
        />
    </div>
    );
}