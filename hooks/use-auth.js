import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { itemsOf } from "../helpers/checklist-helpers"
import { auth, findUserChecklist } from "../services/firebase-service"
import { useAppStore } from "../store/app-store"
import { frameworkOptions } from '../constant'

/*
  Custom hook to manage user authentication and data synchronization

  Logic:
  - Manages user authentication state using Firebase's onAuthStateChanged
  - Synchronizes user's checklist and assessments data
*/
export function useAuth() {
  const [loading, setLoading] = useState(true)

  const setAccount = useAppStore(state => state.setAccount)
  const account = useAppStore(state => state.account)
  const setChecklists = useAppStore(state => state.setChecklists)
  const setAssessments = useAppStore(state => state.setAssessments)

  const authenticateUser = () => {
    if (!account) {
      onAuthStateChanged(auth, (user) => {
        setAccount(user)
        setLoading(false)
        syncUserChecklist(user).catch()

      }, (error) => {
        console.error("Authentication error", error)
        notify.error("An error occurred during login")
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }


  const syncUserChecklist = async (user) => {
    if (!user) return
    const checkList = {}
    const response = await findUserChecklist(user.uid)
    for (const item of response) {
      checkList[item.checklistId] = item.selected
    }
    setChecklists(checkList)
  }

  const syncAssessments = async () => {
    const assessments = []

    for (const key in frameworkOptions) {
      for (const assessment of frameworkOptions[key]) {
        const items = itemsOf(assessment.data)
        assessments.push({
          name: assessment.name,
          path: assessment.path,
          items,
        })
      }
    }

    setAssessments(assessments)
  }


  useEffect(authenticateUser, [account])


  useEffect(() => {
    syncAssessments().catch(console.error)
  }, [])


  return {
    loading
  }
}

