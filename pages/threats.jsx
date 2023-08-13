import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/threats.module.css";

// Format date string to dd-mm-yyyy
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// This page displays the latest 50 Common Vulnerabilities and Exposures (CVE) from the National Vulnerability Database (NVD)
const ThreatsPage = () => {
  const [cves, setCves] = useState([]);

  useEffect(() => {
    fetchCves();
  }, []);

  const fetchCves = async () => {
    try {
      const response = await fetch(
        "https://services.nvd.nist.gov/rest/json/cves/1.0?resultsPerPage=50&orderBy=-pubDate"
      );
      const data = await response.json();

      const sortedCves = data.result.CVE_Items.sort((a, b) => {
        const dateA = new Date(a.publishedDate);
        const dateB = new Date(b.publishedDate);
        return dateB - dateA; // Sort in descending order (most recent first)
      });

      setCves(sortedCves);
    } catch (error) {
      console.error("Error fetching CVE data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Latest 50 Common Vulnerabilities and Exposures</h1>
        {cves.length > 0 ? (
          <table className={styles.my_table}>
            <thead>
              <tr>
                <th>Vulnerability ID</th>
                <th>Summary</th>
              </tr>
            </thead>
            <tbody>
              {cves.map((vulnerability, index) => (
                <tr key={index}>
                  <td>
                    <a href={`https://nvd.nist.gov/vuln/search/results?form_type=Basic&results_type=overview&query=${vulnerability.cve.CVE_data_meta.ID}&search_type=all&isCpeNameSearch=false`} target="_blank" rel="noopener noreferrer">
                      {vulnerability.cve.CVE_data_meta.ID}
                    </a>
                  </td>
                  <td>
                    <p>{vulnerability.cve.description.description_data[0].value}</p>
                    <p>Published Date: {formatDate(vulnerability.publishedDate)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading CVE data...</p>
        )}
      </main>
      <footer className={styles.footer}>
        <div className={styles.exit_button}>
          <Link href="/dashboard">Exit</Link>
        </div>
      </footer>
    </div>
  );
};

export default ThreatsPage;
