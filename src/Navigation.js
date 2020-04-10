import React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import Friends from "./Friends";
import Lobbies from "./Lobbies";
import Home from "./Home";

export default function Navigation() {

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">AoE</NavbarBrand>
                <NavbarToggler/>
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                            <NavItem>
                                <Link to="/friends">Friends</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/lobbies">Lobbies</Link>
                            </NavItem>
                            <NavItem>
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
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}
