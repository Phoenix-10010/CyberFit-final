import { frameworkOptions } from "../constant"

/*
  Function to extract item IDs from a checklist
  
  Logic:
    - Initialize an empty array to store item IDs
    - Loop through categories in the checklist
      - If category has subcategories, loop through subcategories and items
      - If category has direct items, loop through items
    - Return the array of item IDs
*/
export function itemsOf(checklist) {
  const items = []
  for (const el of checklist.category) {
    if (el.subcategory) {
      for (const category of el.subcategory) {
        for (const item of category.items) items.push(item.id)
      }
    }
    if (el.items) {
      for (const item of el.items) items.push(item.id)
    }
  }

  return items
};

/*
  Function to find an assessment by name

  Logic:
    - Loop through frameworkOptions to find a matching checklist
    - If found, return the checklist
    - If not found, throw an error
*/
export function findAssessment(name) {
  for (const key in frameworkOptions) {
    const checklist = frameworkOptions[key].find(el => el.path === name)
    if (checklist) return checklist
  }

  throw new Error(`can't find assessment ${name}`)
}