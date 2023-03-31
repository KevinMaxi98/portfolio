import {ITextScrolling} from "./textScrolling.types";
import BoldPrimaryText from "../../atoms/bold-primary-text/boldPrimaryText";
import styles from "./TextScrolling.module.scss"

export default function TextScrolling(props: ITextScrolling) {
    return(
        <div className={styles.textScrolling}>
            <BoldPrimaryText>
                <span>This is a test</span>
            </BoldPrimaryText>
        </div>
    )
}
