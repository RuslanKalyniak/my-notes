"use client";
import {
    useEffect,
    useState
} from "react";
import styles from "./page.module.css";
import Title from "../title/page";
import CountdownTimer from "../countdownTimer/page";

export default function BackgroundTitle({setStateClass}) {
    const [addClass, setAddClass] = useState(false);
    const [addClassSecond, setAddClassSecond] = useState(false);
    const [addClassThird, setAddClassThird] = useState(false);
    const [addClassFourth, setAddClassFourth] = useState(false);
    const [stateClassButton, setStateClassButton] = useState(false);
    const [titleClass, setTitleClass] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY  > 200) {
                setTitleClass(true)
            } else {
                setTitleClass(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        setTimeout(() => {
            setAddClass(true);
            setStateClass(true)
        }, 3000);

    }, []);

    useEffect(() => {
        setTimeout(() => {
            setAddClassSecond(true);
            setAddClassThird(true);
        }, 5000);

    }, []);


    useEffect(() => {
        setTimeout(() => {
            setAddClassFourth(true);
        }, 5100);

    }, []);

    useEffect(() => {
        if (stateClassButton) {
            document.body.classList.add(styles.menuOpen);
        } else {
            document.body.classList.remove(styles.menuOpen);
        }

    }, [stateClassButton]);


    return (
        <div className={`${styles.container} ${addClass ? styles.removeBackground: ""}`}>
            <div className={styles.background}>
                <h1 className={`${styles.title} ${addClass ? styles.titleSmall: ""} ${addClassSecond ? styles.titleStart: ""}`}>
                    <span className={styles.slideInBottom}>Marauders</span>
                    <span className={styles.slideInBottom1}>Map</span>
                </h1>
                {
                    titleClass && (
                        <div className={styles.titleContainer}>
                            <Title />
                        </div>
                    )
                }
                <div className={`${styles.titleTimer} ${titleClass ? styles.titleTimerVisible: ""}`}>
                    <CountdownTimer initialSeconds={60} />
                </div>
                <span
                    role="button"
                    className={`${styles.buttonBurger} ${addClassThird ? styles.buttonBurgerVisible: ""} ${addClassFourth ? styles.buttonBurgerPosition: ""}`}
                    onClick={() => setStateClassButton(!stateClassButton)}
                >
                    <div className={`${styles.hamburger} ${stateClassButton ? styles.isActive: ""}`}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                </span>

                <div className={`${styles.infoBox} ${stateClassButton ? styles.isActive: ""}`}>
                    {
                        stateClassButton && (
                            <>
                                <h2 className={styles.slideInLeft}>APP INFO</h2>
                                <h4 className={styles.slideInLeft1}>Version 1.0.0</h4>
                                <p className={styles.slideInLeft2}>Beta Version Description</p>
                                <p className={styles.slideInLeft3}>The beta version introduces the ability to select a time in minutes and display the number of users present during that time. The display is divided into three parts: how many users were present at the beginning of the minute, how many left, how many joined, and the final count. In future versions, additional features will be introduced, including user filtering, navigation through sections for detailed section analysis, and a mobile-friendly version of the site</p>
                            </>
                        )
                    }
                </div>
            </div>
        </div>

    );
}