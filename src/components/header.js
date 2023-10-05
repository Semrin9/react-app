import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from '../login';
import LogoutButton from '../logout';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

function BasicExample() {
  let { isAuthenticated, user } = useAuth0();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Food Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/browse">Browse</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        { isAuthenticated ? 
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <LogoutButton />
        <img src={user.picture} alt={user.name} style={{width:"40px", margin:"0 10px"}}/>
        <h4>{user.name}</h4>
        </div>
         : <LoginButton />}
      </Container>
    </Navbar>
  );
}
export default BasicExample

  // function filterByEmail() {
  //   if (isAuthenticated) {
  //     let filteredData = favouritesState.filter(function (item) {return item.email === user.email;});
  //      setFavouritesState(filteredData);
  //   }
  // }

  // useEffect(() => {
  //   filterByEmail();
  // }