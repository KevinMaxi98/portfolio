import Title from "../../atoms/title/title";
import Subtitle from "../../atoms/subtitle/subtitle";
import Icon from "../../atoms/icon/icon";
import styles from "./PresentationBoard.module.scss";
import Image from "next/image";
import profilePicture from '../../../public/images/profile-picture.png';

export default function PresentationBoard() {
    const PRINCIPAL_TITLE_1 = 'SOFTWARE';
    const PRINCIPAL_TITLE_2 = 'DEVELOPER';
    const PRINCIPAL_SUBTITLE = 'FRONT END ADDICTED';
    const SECONDARY_TITLE_1 = 'KEVIN'
    const SECONDARY_TITLE_2 = 'MAXI';
    const SECONDARY_SUBTITLE = 'FULL STACK CAPABLE';
    return (
        <div className={styles.presentationBoard}>
            <div>
                <Title title={PRINCIPAL_TITLE_1}></Title>
                <Title title={PRINCIPAL_TITLE_2}></Title>
                <div className={styles.presentationBoard__description}>
                    <Icon iconName={'remove'}></Icon>
                    <Subtitle subtitle={PRINCIPAL_SUBTITLE}></Subtitle>
                </div>
            </div>

            <div className={styles.presentationBoard__imageSection}>
                <Image src={profilePicture} width={251} height={256} alt={'Profile picture'}/>
            </div>
            <div className={styles.presentationBoard__footerSection}>
                <div className={`${styles.presentationBoard__description} ${styles['presentationBoard__description--secondary']}`}>
                    <Icon iconName={'remove'}></Icon>
                    <Subtitle subtitle={SECONDARY_SUBTITLE}></Subtitle>
                </div>
                <Title textAlign={'end'} title={SECONDARY_TITLE_1}></Title>
                <Title textAlign={'end'} title={SECONDARY_TITLE_2}></Title>
            </div>
        </div>
    )
}
