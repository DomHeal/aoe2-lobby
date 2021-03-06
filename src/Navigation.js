import React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
// import Friends from "./Friends";
import Lobbies from "./Lobbies";
import Home from "./Home";
import About from "./About";
import Friends from "./Friends";

export default function Navigation() {

    return (
        <div>
            <Navbar style={{backgroundColor: '#424242'}} expand="md">
                <NavbarBrand href="/">AoE2:DE</NavbarBrand>
                <NavbarToggler/>
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="pr-2">
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem className="pr-2">
                            <Link to="/friends">Friends</Link>
                        </NavItem>
                        <NavItem className="pr-2">
                            <Link to="/lobbies">Lobbies</Link>
                        </NavItem>
                        <NavItem className="pr-2">
                            <Link to="/about">About</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Switch>
                <Route path="/friends">
                    <Friends/>
                </Route>
                <Route path="/lobbies">
                    <Lobbies/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}
