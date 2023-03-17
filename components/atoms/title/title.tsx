import {ITitle} from "./title.type";
import styles from './Title.module.scss'

export default function Title(props: ITitle) {
    const {title} = props
    return (
        <div className={styles.title}>
            <h2 className={styles.title__text}>{title}</h2>
        </div>
    )
}
