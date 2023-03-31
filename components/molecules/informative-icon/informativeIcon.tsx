import {IInformativeIcon} from "@/components/molecules/informative-icon/informativeIcon.types";
import styles from "./InformativeIcon.module.scss"
import Icon from "../../atoms/icon/icon";

export default function InformativeIcon(props: IInformativeIcon) {
    return(
        <div className={styles.informativeIcon__scrollSection}>
            <Icon iconName={'south'} size={'48px'}></Icon>
            <p><strong>Scroll</strong></p>
        </div>
    )
}
