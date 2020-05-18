import Head from "next/head";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
let Icons;

if (process.browser || typeof window !== "undefined") {
  import("uikit/dist/js/uikit-icons").then((module) => {
    Icons = module.default;
  });
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout pathname={router.pathname}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/uikit.min-3.4.6.css" />
      </Head>
      <Component {...pageProps} />
      <script src="/javascript/uikit.min-3.4.6.js"></script>
    </Layout>
  );
}
