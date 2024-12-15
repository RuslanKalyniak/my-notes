
import styles from "./page.module.css";
import Steps from '../../component/steps/page';
import StepsCircle from '../../component/steps-circle/page';
import Compas from "@/component/compas/page";
import Background from "@/component/background/page";
import Title from "@/component/title/page";
import Station from "@/component/station/page";
import StationFirsrt from "@/component/stationFirsrt/page";

export default function Map() {
    return (
        <>
            <div className={styles.title}>
                <Title />
            </div>
            <Background />
            <div className={styles.containerMap}>
                <StationFirsrt />
                    <div className={styles.containerMapRoom}>
                        <StepsCircle />
                        <Steps stepsCount={5} animationDuration={10.5} />
                        <Steps stepsCount={15} animationDuration={2.5}/>
                        <Steps stepsCount={10} animationDuration={8}/>
                    </div>
                <Station />
            </div>
        </>
    )
}