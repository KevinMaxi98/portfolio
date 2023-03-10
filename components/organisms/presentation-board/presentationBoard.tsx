import Title from "../../atoms/title/title";
import Subtitle from "../../atoms/subtitle/subtitle";
import Icon from "../../atoms/icon/icon";
import styles from "./PresentationBoard.module.scss";

export default function PresentationBoard() {
    const PRINCIPAL_TITLE_1 = 'SOFTWARE';
    const PRINCIPAL_TITLE_2 = 'DEVELOPER';
    const PRINCIPAL_SUBTITLE = 'FRONT END ADDICTED';

    return (
        <div>
            <Title title={PRINCIPAL_TITLE_1}></Title>
            <Title title={PRINCIPAL_TITLE_2}></Title>
            <div  className={styles.presentationBoard__description}>
                <Icon iconName={'remove'}></Icon>
                <Subtitle subtitle={PRINCIPAL_SUBTITLE}></Subtitle>
            </div>
        </div>
    )
}
