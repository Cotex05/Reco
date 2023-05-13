import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {getLoggedInUser, isUserLoggedIn, logout } from "../../api/index"

export default function NavBar(props) {
    console.log("======user", getLoggedInUser())
    return(
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand >Washing Machine Manufacturing</Navbar.Brand>
        <Form className="d-flex">
          <Button variant="danger" onClick={() => logout()}>Logout</Button>
        </Form>
    </Container>
  </Navbar>
    )
}