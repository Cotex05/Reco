import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import {getLoggedInUser, isUserLoggedIn } from "./api/index"
function App() {
  const user = getLoggedInUser()
  const isLoggedIn = isUserLoggedIn(user)
  console.log("=====", {user,isLoggedIn })
  if(!isLoggedIn) return  <Login />
  return <Dashboard isAdmin={user.is_admin} department={user.department} />;
}

export default App;
