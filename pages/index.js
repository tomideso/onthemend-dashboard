import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Main from "components/Home/Main.js";

export default function Home() {
  useEffect(() => {
    // Router.push('/login')
  }, []);

  return (
    <div className="container">
      <Head>
        <title>On The Mend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Main />
      </main>
    </div>
  );
}
