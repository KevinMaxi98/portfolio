import BoldPrimaryText from "../../atoms/bold-primary-text/bold-primary-text";
import styles from "./text-scrolling.module.scss"

export default function TextScrolling() {
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
