import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { calculateAverageScore } from "../helpers/utils";
import { logOut } from "../services/firebase-service";
import { useAppStore } from "../store/app-store";
import styles from "../styles/dashboard.module.css";

export default function Admin() {
    // Initialize state variables
  const [percentage, setPercentage] = useState(0)
  const assessments = useAppStore(state=>state.assessments);
  const checklists = useAppStore(state=>state.checklists);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  // Toggle dropdown
  const toggleDropdown = () =>  setDropdownVisible(!dropdownVisible);
    
    useEffect(()=>{
        setPercentage(Number(calculateAverageScore(assessments, checklists).toFixed(2)))
    },[assessments,checklists ])

    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="CyberFit Logo" width={50} height={50} />
                </div>
                <ul className={`${styles.navLinks} ${dropdownVisible ? styles.dropdownVisible : ''}`}>
                    <li>
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li>
                        <Link href="/assessments">Assessments</Link>
                    </li>
                    <li>
                        <Link href="/threats">Threat Feed</Link>
                    </li>
                    <li>
                        <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link href="/account">My Account</Link>
                    </li>
                </ul>
                <div className={styles.dropdownButton} onClick={toggleDropdown}>
                    <Image src="/menu.png" alt="Menu" width={50} height={50} />
                </div>
            </nav>
            <main className={styles.main}>
                <h1 className={styles.dashboardTitle}>Dashboard</h1>
                <div className={styles.grid}>
                    <Link legacyBehavior href="/score">
                        <a className={styles.card}>
                            <h2>Cyberfit Score</h2>
                            <div className={styles.CircularProgressbar}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    rotation: 0,
                                    strokeLinecap: 'round',
                                    textSize: '16px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgba(62, 174, 21, ${percentage / 100})`,
                                    textColor: '#fff',
                                    trailColor: '#f2f2f266',
                                })}
                            />
                            </div>
                        </a>
                    </Link>

                    <Link legacyBehavior href="/learn">
                        <a className={styles.card}>
                            <h2>Learn 💡</h2>
                            <p>
                            Elevate your cybersecurity stance through interactive learning, drawing from
                            a diverse range of resources.
                            </p>
                        </a>
                    </Link>

                    <Link legacyBehavior href="/assessments">
                        <a className={styles.card}>
                            <h2>Click Here Get Assessed</h2>
                            <div className={styles.audit}>
                                <Image src="/audit_logo.svg" alt="audit" width={125} height={125} />
                            </div>
                        </a>
                    </Link>

                    <Link legacyBehavior href="/threats">
                        <a className={styles.card}>
                            <h2>Latests Threats Feed</h2>
                            <p>
                                Get up to date with the 50 latest Common Vulnerabilities and
                                Exposures (CVE) and how to mitigate them.
                            </p>
                        </a>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.exit_button}>
                    <button onClick={logOut}>Sign Out</button>
                </div>
            </footer>
        </div>
    );
};
