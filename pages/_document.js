import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/test.svg" />
                <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c&display=swap' rel='stylesheet' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
                <script src='/scripts/darkmode.js' async></script>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}