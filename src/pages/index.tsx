import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Movies By Nik - Find Your Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-lg-12">
          <Header></Header>
        </div>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to This Movies Demo</h1>

        <p className={styles.description}>A small demo of Next.Js using Okta</p>

        <div className={styles.grid}>
          <a href="https://www.okta.com/" className={styles.card}>
            <h3>Okta &rarr;</h3>
            <p>Connect your workforce to every app.</p>
          </a>

          <a href="https://nextjs.org" className={styles.card}>
            <h3>Next.Js &rarr;</h3>
            <p>The React Framework for Production</p>
          </a>

          <a href="https://next-auth.js.org/" className={styles.card}>
            <h3>NextAuth.js &rarr;</h3>
            <p>Authentication for Next.js made simple</p>
          </a>

          <a href="http://profile.fishbowlllc.com/" className={styles.card}>
            <h3>Author &rarr;</h3>
            <p>Learn more about the author of this tutorial</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        A small tutorial written by&nbsp;
        <a
          target="_blank"
          rel="noreferrer"
          href="http://profile.fishbowlllc.com/"
        >
          Nik Fisher
        </a>
        &nbsp;using&nbsp;
        <a target="_blank" rel="noreferrer" href="https://nextjs.org">
          Next.js
        </a>
        &nbsp;powered by&nbsp;
        <a target="_blank" rel="noreferrer" href="https://www.okta.com/">
          Okta
        </a>
        .
      </footer>
    </div>
  );
}
