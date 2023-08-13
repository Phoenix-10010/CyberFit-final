import Checkbox from "./Checkbox";

// Define the Checklist component
export default function Checklist({ items, handleCheckboxChange }){
  return (
    <div>
      <ul>
        {/* Map through the items array and render a Checkbox for each item */}
        {items.map((item) => (
          <li key={item.id}>
            <Checkbox
              item={item}
              onChange={handleCheckboxChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};