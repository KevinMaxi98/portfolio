import styles from "./bold-primary-text.module.scss"


export default function BoldPrimaryText(props: any) {
    return (
        <div data-testid="bold-div" className={styles.boldPrimaryText}>
            {props.children}
        </div>
    )
}
