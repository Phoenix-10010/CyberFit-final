import { useAuth } from "../hooks/use-auth"
import { useAppStore } from "../store/app-store"
import Login from "./Login"

export default function PageGuard({ children }) {
  
  // Get the loading status from the useAuth hook and the account from the app store
  const { loading } = useAuth()
  const account = useAppStore(state => state.account)


  // if loading, show loading message
  if(loading) return <div className="Center">Loading ...</div>

  // if not loading and no account, show login page
  if (!loading && !account) return <Login />

 
  // if not loading and account, show children
  return children
}