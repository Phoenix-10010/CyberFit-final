// Function to calculate score of an assessment
export function calculateScore(items, checklists) {
  let count = 0

  for (const id of items) {
    if (checklists[id]) ++count
  }

  return ((count / Number(items.length)) * 100)
}

// Function to calculate average score of all assessments
export function calculateAverageScore(assessments, checklists) {
  let totalSum = 0;
  let totalCount = 0;

  for (const assessment of assessments) {
    const sum = calculateScore(assessment.items, checklists);
    totalSum += sum;
    totalCount++;
  }

  return totalCount > 0 ? (totalSum / totalCount) : 0;
}

