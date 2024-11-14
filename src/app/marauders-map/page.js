
import styles from "./page.module.css";
import Steps from '../../component/steps/page';
import StepsCircle from '../../component/steps-circle/page';

export default function Map() {
    return (
        <>
            <Steps stepsCount={5} animationDuration={10.5} />
            <Steps stepsCount={15} animationDuration={2.5}/>
            <Steps stepsCount={10} animationDuration={8}/>
            <StepsCircle />
        </>
    )
}