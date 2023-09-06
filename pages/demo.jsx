import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/demo.module.css';
import YouTube from 'react-youtube';
import React, { useState, useEffect } from 'react';

// Demo page
export default function Home() {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
      const checkScreenWidth = () => {
        setIsMobileScreen(window.innerWidth <= 600);
      };
  
      window.addEventListener('resize', checkScreenWidth);
  
      checkScreenWidth();
  
      return () => {
        window.removeEventListener('resize', checkScreenWidth);
      };
    }, []);

    const videoId = "c9ZOAdjMR_A";

    const PlayButton = () => (
        <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        >
        <div className={styles.play_logo}>
          <Image src="/youtube_logo.svg" alt="Youtube Logo" width={256} height={57} />
        </div>
        </a>
      );

  return (
    <div className={styles.container}>
      <Head>
        <title>CyberFit Demo Page</title>
        <meta name="description" content="CyberFit Demo Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Discover how to use CyberFit ⬇️
        </h1>

        {/* Conditionally render the PlayButton component for mobile screens */}
        {isMobileScreen ? (
          <PlayButton />
        ) : (
          <div className={styles.youtube}>
            <YouTube videoId={videoId} />
          </div>
        )}

        {/* Embed YouTube video */}


        {/* Link to the Dashboard page*/}
        <button className={styles.button}>
          <Link legacyBehavior href="/dashboard">
            <div className={styles.grid}>
              Continue to Log In
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
