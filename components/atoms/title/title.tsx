import {ITitle} from "./title.type";
import styles from './title.module.scss'

export default function Title(props: ITitle) {
    const {title, textAlign} = props

    const getStyles = () => {
        let styles: { [key: string]: string } = {}
        if (textAlign) {
            styles['textAlign'] = textAlign
        }
        return (styles)
    }

    return (
        <div style={getStyles()} className={styles.title}>
            <h2 className={styles.title__text}>{title}</h2>
        </div>
    )
}
