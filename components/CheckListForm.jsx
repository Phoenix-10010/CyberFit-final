import { useCallback, useState } from "react";
import { addCheckList } from "../services/firebase-service";
import { useAppStore } from '../store/app-store';
import styles from '../styles/checklists.module.css';
import Checklist from "./Checklist";
import Spinner from "./Spinner";

// Define the CheckListForm component
export default function CheckListForm({ checkList, items }) { 
  
  // Get checklists state from app store
  const checklists = useAppStore(state=>state.checklists)

  // Initialize loading state and get account info from app store
  const [loading, setLoading] = useState(false)
  const account = useAppStore(state=>state.account)

  // Handle checkbox change
  const handleCheckboxChange = async (payload) => {
    setLoading(true)
    await addCheckList(account.uid,payload )
    setLoading(false)
  };

  // Get number of checked items
  const checkedItems = useCallback(() => {
    let count = 0
    for (const id of items)  if(Boolean(checklists[id])) ++count
    return count

  },[checklists, items])

  // Initialize search state
  const [searchValue, setSearchValue] = useState("");

  // Handle search click
  const handleSearchClick = () => {
    if (searchValue) {
      const encodedSearchValue = encodeURIComponent(searchValue);
      const googleSearchURL = `https://www.google.com/search?q=${encodedSearchValue}`;
      window.open(googleSearchURL, "_blank");
    }
  };

  // Handle key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

/*
  Logic:
  1. If there are no items, return null
  2. If there are items, render the total number of checked items
  3. Map through the checkList.category array and render a div for each category
  4. If the category has a subcategory array, map through the subcategory array and render a div for each subcategory
  5. If the subcategory has a detail property, render the detail property
  6. If the subcategory has an items array, render the Checklist component
  7. If the category has an items array, render the Checklist component
*/
  return (
    <div>
      <div className={styles.total}>{`${checkedItems()}/${items.length}`}</div>
      <div className={styles.framework_detail}>
          <input
            type="text"
            placeholder="Google Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          {searchValue && ( // Render the button only if searchValue is not empty
          <button onClick={handleSearchClick}>🔍</button>
        )}
      </div>
      {checkList.category.map((category) => (
        <div key={category.id}>
          <h2>{category.title}</h2>
          {category['alt-title'] && <p>{category['alt-title']}</p>}
          {category.subcategory ? (
            category.subcategory.map((subcategory) => (
              <div key={subcategory.id}>
                <h3>{subcategory.name}</h3>
                {subcategory.detail && <p>{subcategory.detail}</p>}
                {subcategory.items && (
                  <Checklist
                    checklistId={checkList.id}
                    items={subcategory.items}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                )}
              </div>
            ))
          ) : (
            category.items && (
              <Checklist
                items={category.items}
                handleCheckboxChange={handleCheckboxChange}
              />
            )
          )}
        </div>
      ))}

      {
        loading && 
      <div className={styles.bottom_spinner}>
        <Spinner/>
      </div>
      }
    </div>
  );
};






