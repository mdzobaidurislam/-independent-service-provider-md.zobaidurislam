import React from "react";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Navbar expand="lg" className="header" sticky="top">
        <Container>
          <div className="logo">
            <Link to="/">Gym Trainer</Link>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto main_menu" navbarScroll>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/about">About</NavLink>

              {user && user ? (
                <>
                  <button onClick={() => signOut(auth)}>Sign Out</button>
                </>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
