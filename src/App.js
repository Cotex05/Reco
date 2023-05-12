import { Button, Form } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  const login = true;

  return <>{login ? <Dashboard panel={1} /> : <Login />}</>;
}

export default App;
