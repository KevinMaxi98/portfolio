import styles from "./informative-icon.module.scss"
import Icon from "../../atoms/icon/icon";

export default function InformativeIcon() {
    return(
        <div data-testid="informative-icon" className={styles.informativeIcon__scrollSection}>
            <Icon iconName={'south'} size={'48px'}></Icon>
            <p><strong>Scroll</strong></p>
        </div>
    )
}
