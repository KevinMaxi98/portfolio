import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import PresentationBoard from "../components/organisms/presentation-board/presentationBoard";
import TextScrolling from "../components/organisms/text-scrolling/textScrolling";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Maxi: Software Developer</title>
        <meta name="description" content="Kevin Maxi's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
          <PresentationBoard></PresentationBoard>
          <TextScrolling></TextScrolling>
          <div className={styles.main__noise} data-key="noise"></div>
      </main>
    </>
  )
}
