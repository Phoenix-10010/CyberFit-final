import React, { useState } from "react";
import styles from "../styles/faq.module.css";
import Link from "next/link";

const FaqPage = () => {
  
  // Show or hide the response to each question
  const [showResponses, setShowResponses] = useState({});

  // Toggle the response to each question
  const toggleResponse = (question) => {
    setShowResponses((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };

    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.faq_box}>
            <h1>Frequently Asked Questions</h1>
            <section className={styles.question}>
            <h2 onClick={() => toggleResponse("purpose")}>What is the purpose of this application?⬇️</h2>
            {showResponses["purpose"] && (
              <p>
                The purpose of this application is to provide users with
                cybersecurity frameworks and guidelines to enhance their
                cybersecurity posture. Users can use the provided frameworks
                checklists to assess their compliance level and determine what
                actions to take.
              </p>
            )}
            </section>
            <section className={styles.question}>
              <h2 onClick={() => toggleResponse("howToUseChecklists")}>How can I use the cybersecurity frameworks checklists?⬇️</h2>
              {showResponses["howToUseChecklists"] && (
                <div>
                  <p>
                    To use the cybersecurity frameworks checklists, follow these steps:
                  </p>
                  <ol>
                    <li>Select the desired cybersecurity framework from the industry category list.</li>
                    <li>Review the checklist items for the selected framework.</li>
                    <li>
                      Assess your organizationt&#39;s compliance level for each checklist item.
                    </li>
                    <li>Take necessary actions to improve compliance.</li>
                  </ol>
                </div>
              )}
            </section>
            <section className={styles.question}>
              <h2 onClick={() => toggleResponse("customizeChecklists")}>Can I customize the checklists for my organization?⬇️</h2>
              {showResponses["customizeChecklists"] && (
                <div>
                  <p>
                    Yes, you can customize the checklists to better align with your organizationt&#39;s specific requirements and needs. However, itt&#39;s important to ensure that the core security principles and best practices are maintained.
                  </p>
                  <p>
                    <em>*** Please note that this feature is exclusively available to users with administrative privileges in our paid version.</em>
                  </p>
                </div>
              )}
            </section>
            <section className={styles.question}>
              <h2 onClick={() => toggleResponse("dataCollection")}>How is Data Collected and Handled?⬇️</h2>
              {showResponses["dataCollection"] && (
                <div>
                  <p>
                    At CyberFit, we take data privacy and security seriously. Here&#39;s how we collect and handle data within our application:
                  </p>
                  <ol>
                    <li>
                      <h3>Authentication and User Data</h3>
                      <p>
                        We use Google&#39;s secure authentication system to allow users to sign in to our application. When you sign in using your Google account, we receive your account&#39;s basic information, including your display name, email address, and profile picture. Rest assured that we do not store or have access to your Google account password.
                      </p>
                    </li>
                    <li>
                      <h3>Framework Assessments</h3>
                      <p>
                        Our application provides cybersecurity frameworks and checklists to assess your organization&#39;s compliance. These frameworks are anonymized and identified by unique IDs stored in our Firestore database. We do not store any sensitive or personal data related to your organization&#39;s assessments within our system.
                      </p>
                    </li>
                    <li>
                      <h3>Data Protection</h3>
                      <p>
                        We implement industry-standard security measures to protect your data. Our application&#39;s architecture is designed to ensure the confidentiality, integrity, and availability of your information. We use encryption and access controls to safeguard your data from unauthorized access.
                      </p>
                    </li>
                    <li>
                    <h3>Your Privacy Matters</h3>
                    <p>
                      Your privacy is important to us. We do not share or sell your personal data to third parties. For a comprehensive understanding of how we handle your data in accordance with Google&#39;s authentication, please review this{" "}
                      <Link href="https://support.google.com/accounts/answer/12921417?hl=en#zippy=%2Chow-third-parties-use-your-data%2Cstop-sharing-your-data%2Creview-apps-where-you-use-sign-in-with-google">
                        <strong>Privacy Policy</strong>
                      </Link>
                      .
                    </p>
                    </li>
                  </ol>
                </div>
              )}
            </section>
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
    );
  };

export default FaqPage;
