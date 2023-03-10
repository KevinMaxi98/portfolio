import {IIcon} from "./icon.type";
import styles from "./Icon.module.scss"
import {useEffect, useState} from "react";

export default function Icon(props: IIcon) {
    const {iconName, size = '14px', type = '', color = ''} = props
    const [iconClass, setIconClass] = useState('')

    useEffect(() => {
        getIconClass()
    }, [])

    const getIconClass = () => {
        let result = styles.icon
        if (type !== '') {
            result += ' icon--' + type
        }
        setIconClass(result)
    }

    return (
        <i
            style={{fontSize: size, color: color}}
            className={iconClass}>
            {iconName}</i>
    )
}
