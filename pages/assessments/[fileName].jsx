import { frameworkOptions } from "../../constant";
import styles from '../../styles/checklists.module.css';

import Link from "next/link";
import CheckListForm from "../../components/CheckListForm";
import PageGuard from "../../components/PageGuard";
import { findAssessment, itemsOf } from '../../helpers/checklist-helpers';
import { notify } from '../../services/notifications-service';


export default function Assessment({ checkList, items }) {
  return <PageGuard>
    <div className={styles.container}>
      <main className={styles.main}>
        <CheckListForm checkList={checkList} items={items} />
      </main>
    <footer className={styles.footer}>
        <div className={styles.exit_button}>
          <Link href="/dashboard">Exit</Link>
      </div>
    </footer>
    </div>
  </PageGuard>
}

/*   
  This function is responsible for fetching the data needed to render the Assessment page.
  It retrieves the checklist name from the route parameters and uses it to find the assessment's data.
  If successful, it returns the retrieved data as static props to be used by the page component.
  If there's an error, it logs the error and displays a notification.
*/
export async function getStaticProps(context) {
  try {
    const { params } = context;
    const checklistName = params.fileName
    const checkList = findAssessment(checklistName).data
    const items = itemsOf(checkList)

    return {
      props: {
        checkList,
        items
      },
    };
  } catch (error) {
    console.error("Error reading JSON file:", error);
    notify.error("Error reading JSON file:")

    return {
      props: {
        checkList: null,
        items: []
      },
    };
  }
}


export  function getStaticPaths() {
  // Retrieve the IDs or dynamic parameters needed to generate the pages
  const paths = [];

  for (const key in frameworkOptions) {
    if (Array.isArray(frameworkOptions[key])) {
      for (const element of frameworkOptions[key]) {
        paths.push({params: { fileName: String(element.path) },})
      }
      
    }
  }

  return {
    paths,
    fallback: false, 
  };
}

