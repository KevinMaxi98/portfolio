import {ITextScrolling} from "./textScrolling.types";
import BoldPrimaryText from "../../atoms/bold-primary-text/boldPrimaryText";
import styles from "./TextScrolling.module.scss"

export default function TextScrolling(props?: ITextScrolling) {
    const phrases = [
        'Over the years I have spent time converting designs into',
        'pixel-perfect,',
        'performant,',
        'accessible',
        'and responsive applications/websites.',
        'I have always been excited about the entire development spectrum,',
        'so I frequently engage in backend.',
        'Well what can I say,',
        'I sincerely simply love working on ambitious projects with positive people',
        'in a conducive work environment.'
    ]
    return (
        <div className={styles.textScrollingSection}>
            {
                phrases.map((phrase: string) =>
                    <BoldPrimaryText key={`${phrase.slice(0,3)}`}>
                        <span>{phrase}</span>
                    </BoldPrimaryText>
                )
            }
        </div>
    )
}
