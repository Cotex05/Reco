import React from "react";
import Officerpanel from "./OfficerPanel";
import Userpanel from "./UserPanel";
import Login from "../Login";
import { getLoggedInUser, isUserLoggedIn } from "../../api/index";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
export default function Dashboard({ is_admin }) {
  return (
    <Router>
      <Switch>
          <Route path="/department" element={<Userpanel />} />
          <Route path="/officer-panel" element={<Officerpanel />} />
          <Route path="/" element={<Login />} />
      </Switch>
    </Router>
  );
}
