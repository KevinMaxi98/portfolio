import {IIcon} from "./icon.type";
import styles from "./icon.module.scss"

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
            role="icon"
            style={getStyles()}
            aria-label={iconName}
            className={getIconClass()}>
            {iconName}
        </i>
    )
}
