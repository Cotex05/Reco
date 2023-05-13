import React from "react";
import Officerpanel from "./OfficerPanel";
import Userpanel from "./UserPanel";
import Login from "../Login";
import {getLoggedInUser, isUserLoggedIn } from "../../api/index"

export default function Dashboard({ is_admin}) {
  
  const user = getLoggedInUser()
  const isLoggedIn = isUserLoggedIn(user)
  if(!isLoggedIn) return  <Login />
  if(is_admin) return <Officerpanel />;
  return <Userpanel />; 
}
