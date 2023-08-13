import Link from "next/link";
import React, { useState } from "react";
import PageGuard from "../../components/PageGuard";
import { frameworkOptions, industryOptions } from "../../constant";
import styles from "../../styles/assessments.module.css";


/*
  This component represents the Assessments page where users can choose assessment options.
  It uses state to manage the selected option, whether to show questions, and available frameworks.
  Users can choose between general and industry options, and industry-specific frameworks are displayed.
  It renders buttons and links for navigation based on user selections.
*/

export default function AssessmentsPage() {

  const [selectedOption, setSelectedOption] = useState("");
  const [showQuestions, setShowQuestions] = useState(true);
  const [frameworks, setFrameworks] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowQuestions(false);
    setFrameworks(getFrameworks(option));
  };

  const getFrameworks = (option) => {
    return frameworkOptions[option] || [];
  };

  const renderFrameworkOptions = () => {
    return frameworks.map((framework, index) => (
      <li key={index}>
        <Link href={`/assessments/${framework.path}`}>
          {framework.name}
        </Link>
      </li>
    ));
  };

  return (
    <PageGuard>
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.assessments_box}>
          <form>
            <h1>Assessments</h1>
            {showQuestions && (
              <div className={styles.options}>
                <p>What are you looking for?</p>
                <div>
                  <button
                  type="button"
                    className={selectedOption === "general" ? styles.selectedOption : ""}
                    onClick={() => handleOptionChange("general")}
                  >
                    General
                  </button>
                </div>
                <div>
                  <button
                  type="button"
                    className={selectedOption === "industry" ? styles.selectedOption : ""}
                    onClick={() => handleOptionChange("industry")}
                  >
                    Industry
                  </button>
                </div>
              </div>
            )}
            {!showQuestions && selectedOption === "industry" && (
              <div className={styles.options}>
                <p>Select your industry:</p>
                {industryOptions.map((option) => (
                  <div key={option.value}>
                    <button
                    type="button"
                      className={selectedOption === option.value ? styles.selectedOption : ""}
                      onClick={() => handleOptionChange(option.value)}
                    >
                      {option.label}
                    </button>
                  </div>
                ))}
              </div>
            )}
            {!showQuestions && industryOptions.some((option) => option.value === selectedOption) && (
              <div className={styles.options}>
                <h3>{selectedOption === "general" ? `${selectedOption} frameworks:` : `Cybersecurity frameworks for ${selectedOption}:`}</h3>
                <ul>{renderFrameworkOptions()}</ul>
              </div>
            )}
          </form>
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

