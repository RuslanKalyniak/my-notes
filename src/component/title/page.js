"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import title from "../../image/Title.png";

export default function Title({}) {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.titleContainer}>
        <Image
            alt="title-img"
            src={title}
            placeholder="blur"
            quality={100}
            width={500}
            height={200}
        />
    </div>
    );
}