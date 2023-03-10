import {ISubtitle} from "./subtitle.type";
import styles from "./Subtitle.module.scss"
export default function Subtitle(props: ISubtitle) {
    const {subtitle} = props
    return (
        <div className={styles.subtitle}>
            <p className={styles.subtitle__text}>{subtitle}</p>
        </div>
    )
}
