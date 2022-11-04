
import Navbar from '../atoms/navbar'
import Footer from '../atoms/footer'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>Rakheoana Lefela | software developer</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}



