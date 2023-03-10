import {ITitle} from "./title.type";
import styles from './Title.module.scss'

export default function Title(props: ITitle) {
    const {title} = props
    return (
        <div className={styles.title}>
            <h1 className={styles.title__text}>{title}</h1>
        </div>
    )
}
