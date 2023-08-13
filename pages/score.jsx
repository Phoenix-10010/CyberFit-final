import Link from "next/link";
import React from "react";
import PageGuard from "../components/PageGuard";
import { calculateAverageScore, calculateScore } from "../helpers/utils";
import { useAppStore } from "../store/app-store";
import styles from "../styles/score.module.css";
import { frameworkOptions } from "../constant";
import ProgressBar from "@ramonak/react-progress-bar";

/*
  * Score page
  * 
  * This page displays the average score of all assessments carried out by the user.
  * The average score is calculated by summing up the scores of all assessments and dividing it by the number of assessments.
*/
export default function ScorePage(){
  const assessments = useAppStore(state => state.assessments);
  const checklists = useAppStore(state => state.checklists);

  return (
    <PageGuard>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Cyberfit Score</h1>
          <p>
            (Represent the average sum of all assessments carried out)
            <br />
            <br />
            <br />
            <br />
          </p>
          <div className={styles.scoreContainer}>
            {frameworkOptions.general.map(option => {
              const assessment = assessments.find(a => a.path === option.path);
              if (assessment) {
                return (
                  <Link href={`/assessments/${assessment.path}`} key={assessment.name} className={styles.scoreItem}>
                    <h2>{assessment.name}</h2>
                    <p>{calculateScore(assessment.items, checklists).toFixed(2)}%</p>
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </main>
        <footer className={styles.footer}>
          <div>
            <h2>Total Average Score: {calculateAverageScore(assessments, checklists).toFixed(2)}%</h2>
            <ProgressBar completed={calculateAverageScore(assessments, checklists).toFixed(2)} customLabel=" " />
          </div>
          <div className={styles.exitButton}>
            <Link href="/dashboard">
              Exit
            </Link>
          </div>
        </footer>
      </div>
    </PageGuard>
  );
}