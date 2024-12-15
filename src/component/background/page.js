"use client";
import styles from "./page.module.css";
import Image from "next/image";
import imageUrl from "../../image/background1.jpg";

export default function Background({}) {

    return (
    <div>
        {/* <Image
            alt="background-img"
            src={imageUrl}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vh"
            style={{
                position: "absolute",
                objectFit: "cover",
            }}
        /> */}
        <div className={styles.background}></div>
    </div>
    );
}