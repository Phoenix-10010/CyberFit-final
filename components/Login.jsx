import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signInWithGoogle } from "../services/firebase-service";
import styles from "../styles/login.module.css";

// Sign in with Google
export default function Login() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.login_box}>
                    <h2>
                        Your journey starts here.
                        <br />
                        Sign in with Google below to explore our platform. ⬇️
                    </h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <button onClick={signInWithGoogle}>
                                <Image src="/google.png" alt="Google" width={270} height={69} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.exit_button}>
                    <Link href="/">
                        <button type="submit">Exit</button>
                    </Link>
                </div>
            </footer>
        </div>
    );
};
