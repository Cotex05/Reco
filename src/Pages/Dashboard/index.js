import React from "react";
import Officerpanel from "./OfficerPanel";
import Userpanel from "./UserPanel";
import Adminpanel from "./AdminPanel";

export default function Dashboard({ panel = 0 }) {
  if (panel === 0) return <Userpanel />;
  else if (panel === 1) return <Officerpanel />;
  else if (panel === 3) return <Adminpanel />;
  else return <h1>Error: No Access</h1>;
}
