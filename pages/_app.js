import Head from 'next/head'
import Layout from 'components/Layout/Layout'

if (process.browser || typeof window !== "undefined") {
    require('../public/styles/style.css')
    require('../public/styles/uikit.min-3.4.2.css')
}


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <Component {...pageProps} />
            <script src='/javascript/uikit.min-3.4.2.js'></script>
            <script src='/javascript/uikit-icons.min.js'></script>
        </Layout>)
} 

