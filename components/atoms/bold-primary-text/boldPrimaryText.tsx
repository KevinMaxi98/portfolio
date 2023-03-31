import {IBoldPrimaryText} from "./boldPrimaryText.types";
import styles from "./BoldPrimaryText.module.scss"


export default function BoldPrimaryText(props: any, specificProps: IBoldPrimaryText) {
    return (
        <div className={styles.textScrollingSection}>
            {props.children}
        </div>
    )
}
