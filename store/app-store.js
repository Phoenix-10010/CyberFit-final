import { create } from "zustand"

/*
  The following code demonstrates the use of slices in the zustand state management system.
  Slices help organize different parts of the application's state, promoting modularity
  and separation of concerns.

  In this code:
  - Three slices ('account', 'checklists', and 'assessments') are created to manage specific parts of the state.
  - Each slice has an initial state and a setter function to update that state.
  - The 'useAppStore' hook is created by combining these slices using the 'create' function from zustand.
*/

function createAccountSlice(set) {
  return {
    account: undefined,
    setAccount: (account) => set({ account })
  }
}

function createCheckListSlice(set) {
  return {
    checklists: {},
    setChecklists: (checklists) => set({ checklists }),
  }
}

function createAssessmentsSlice(set) {
  return {
    assessments: [],
    setAssessments: (assessments) => set({ assessments }),
  }
}

export const useAppStore = create((...a) => ({
  ...createAccountSlice(...a),
  ...createCheckListSlice(...a),
  ...createAssessmentsSlice(...a)
}))