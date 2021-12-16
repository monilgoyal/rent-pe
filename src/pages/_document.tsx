import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
    render() {
        return <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/simplebar@latest/dist/simplebar.css"
                />
            </Head>
            <body >
                <Main />
            </body>
            <NextScript />
        </Html>
    }
}