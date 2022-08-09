import React from "react"
import Head from "next/head"
import { useRouter } from 'next/router';


type LayoutType = {
    title?: string;
    children?: React.ReactNode;
}

export default ({ children, title = 'Mr Lyons' }: LayoutType) => {
    const router = useRouter();
    const pathname = router.pathname;
    return (
        <div className="app-main">
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="Rakheoana lefela Fullstack software development"></meta>
                <meta property='og:title' content='Rakheoana Lefela | Personal Portfolio'></meta>
                {/* <link rel="icon" href="../MrLyons.svg" /> */}
                <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' rel="stylesheet" />
                <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap' rel="stylesheet" />
            </Head>

            <main className={(pathname !== '/' ? 'main-page' : '')}>
                {children}
            </main>
        </div>
    )
}