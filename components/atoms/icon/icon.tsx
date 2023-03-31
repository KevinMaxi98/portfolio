import {IIcon} from "./icon.type";
import styles from "./Icon.module.scss"

export default function Icon(props: IIcon) {
    const {iconName, size = '14px', type = '', color = '', className} = props

    const getIconClass = () => {
        let result = styles.icon
        if (type !== '') {
            result += ' icon--' + type
        }
        if (className) {
            result = result + ' ' + className
        }
        return result
    }

    const getStyles = () => {
        let styles: { [key: string]: string } = {}
        if (size) {
            styles['fontSize'] = size
        }
        if (color) {
            styles['color'] = color
        }
        return (styles)
    }

    return (
        <i
            style={getStyles()}
            className={getIconClass()}>
            {iconName}
        </i>
    )
}
