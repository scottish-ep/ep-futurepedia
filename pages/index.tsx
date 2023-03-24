import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { headerMenu } from '@/constants'
import Header from '@/components/Header/Header'



export default function Home() {
  return (
    <>
      <Head>
        <title>Futurepedia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header 
          darkLogoSrc={headerMenu.darkLogoSrc}
          mbDarkLogoSrc={headerMenu.mbDarkLogoSrc}
        />

        
      </main>
    </>
  )
}
