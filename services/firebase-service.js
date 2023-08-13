import { initializeApp, } from "firebase/app";
import 'firebase/auth';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { getEnvVariable } from "../helpers/env-variables-helpers";
import { notify } from "./notifications-service";
const app = initializeApp({
  apiKey: getEnvVariable(process.env.apiKey, "apiKey"),
  authDomain: getEnvVariable(process.env.authDomain, "authDomain"),
  projectId: getEnvVariable(process.env.projectId, "projectId"),
  storageBucket: getEnvVariable(process.env.storageBucket, "storageBucket"),
  messagingSenderId: getEnvVariable(process.env.messagingSenderId, "messagingSenderId"),
  appId: getEnvVariable(process.env.appId, "appId")
});
const db = getFirestore(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth();
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    if (error.code !== "auth/popup-closed-by-user") {
      // firebase is not happy to be closed
      console.error("Authentication error:", error);
    }
  }
};
export const logOut = () => signOut(auth)

export async function findUserChecklist(collectionId) {
  if (!collectionId) {
    notify.error('Missing collectionID')
    return []
  }
  const checkLists = []
  const snapshot = await getDocs(collection(db, collectionId));
  snapshot.forEach((data) => data.exists() && checkLists.push(data.data()))
  return checkLists
}

export async function addCheckList(collectionId, data) {
  if (!collectionId || !data) return
  const checkListCollection = doc(db, collectionId, data.checklistId)
  await setDoc(checkListCollection, data);
}