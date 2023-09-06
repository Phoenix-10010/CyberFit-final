import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Home.module.css';

// Home page
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CyberFit Home Page</title>
        <meta name="description" content="CyberFit Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>CyberFit!</a>
        </h1>

        <h2>
          Enhance Your Cybersecurity Posture for a Secure Tomorrow!
        </h2>

        <p className={styles.description}>
          Get started by clicking on the button below!
        </p>

        {/* Link to the Demo page*/}
        <button className={styles.button}>
          <Link legacyBehavior href="/demo">
            <div className={styles.grid}>
              <Image src="/logo.png" alt="Cyberfit" width={300} height={300} priority={true} />
            </div>
          </Link>
        </button>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
