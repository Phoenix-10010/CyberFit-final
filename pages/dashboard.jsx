import Admin from "../components/Admin";
import PageGuard from "../components/PageGuard";

// Dashboard page - PageGuard ensures that only authenticated users can access the Dashboard
export default function Dashboard() {
  return <PageGuard> <Admin /> </PageGuard> 
}