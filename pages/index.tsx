import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import PresentationBoard from "../components/organisms/presentation-board/presentation-board";
import TextScrolling from "../components/organisms/text-scrolling/text-scrolling";
import {useEffect} from "react";

export default function Home() {

    useEffect(() => {
        window.addEventListener('scroll', () => unrevealed(), {passive: true});
    }, [])

    const unrevealed = () => {
        const presentationBoardElement = document.getElementById("presentation-board")
        const textScrollingElement = document.getElementById('text-scrolling')
        const windowHeight = window.innerHeight;
        const elementTop = textScrollingElement?.getBoundingClientRect().top || 0

        if (elementTop > 0 && presentationBoardElement) {
            presentationBoardElement.style.opacity = String(((elementTop / windowHeight) * 100) / 100)
        }
    }

    return (
        <>
            <Head>
                <title>Kevin Maxi: Software Developer</title>
                <meta name="description" content="Kevin Maxi's portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/x-icon" href="/logo.png"/>
            </Head>
            <main className={styles.main}>
                <PresentationBoard></PresentationBoard>
                <div id='text-scrolling' className={styles.main__textScrollingSection}>
                    <TextScrolling></TextScrolling>
                </div>
                <div className={styles.main__noise} data-key="noise"></div>
            </main>
        </>
    )
}
