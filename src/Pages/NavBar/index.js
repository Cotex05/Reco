import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import {getLoggedInUser, isUserLoggedIn, logout } from "../../api/index"
import { useNavigate } from "react-router-dom";
export default function NavBar(props) {
    console.log("======user", getLoggedInUser())
    const navigate = useNavigate()
    const handleLogout = () => {
      logout()
      navigate('/')
    }
    return(
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand >Washing Machine Manufacturing</Navbar.Brand>
        <div className="d-flex">
          <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </div>
    </Container>
  </Navbar>
    )
}