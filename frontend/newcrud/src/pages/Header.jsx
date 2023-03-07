import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../pages/header.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
  const nav = useNavigate();
  let location = useLocation();
  const token = localStorage.getItem("token");
  const [islogin, setIslogin] = useState(false);
  useEffect(() => {
    if (token) {
      setIslogin(true);
    }
  });
  useEffect(() => {
    if (islogin) {
      setIslogin(true);
    }
  }, []);
  const logout = () => {
    localStorage.clear("token");
    nav("/");
    setIslogin(false);
  };

  return (
    <>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">
              <Link to="/" className="non">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/addContact" className="non">
                Register
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/dashboard" className="non">
                Dashboard
              </Link>
            </Nav.Link>
            {islogin ? (
              <Nav.Link>
                <Link to="/" className="non" onClick={logout}>
                  Logout
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <Link to="/" className="non">
                  Login
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
