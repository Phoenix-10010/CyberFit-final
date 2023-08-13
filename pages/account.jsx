import React, { useEffect, useState } from "react";
import styles from "../styles/account.module.css";
import Link from "next/link";
import PageGuard from "../components/PageGuard"; // Import the PageGuard component
import { useAppStore } from "../store/app-store";

const AccountPage = () => {
    
    // Get the account from the store and set the state variables to the account's values
    const { account } = useAppStore();
    const [displayName, setDisplayName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (account) {
            setDisplayName(account.displayName || "");
            setProfilePicture(account.photoURL || "");
            setEmail(account.email || "");
        }
    }, [account]);

    return (
        <PageGuard>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.account_box}>
                        <h1>Welcome to your CyberFit Account, <br/> {displayName}</h1>
                        {account && (
                            <div>
                                <br />
                                <div className={styles.profile_picture}>
                                    <img src={profilePicture} alt="Profile" />
                                </div>
                                <br />
                            </div>
                        )}
                        <h3>Email: {email}</h3>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <div className={styles.exit_button}>
                        <Link href="/dashboard">
                            <button type="submit">Exit</button>
                        </Link>
                    </div>
                </footer>
            </div>
        </PageGuard>
    );
};

export default AccountPage;
