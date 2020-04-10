import React, {useState} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Friends from "./Friends";
import Lobbies from "./Lobbies";
import Home from "./Home";
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">AoE</NavbarBrand>
                <NavbarToggler/>
                <Collapse isOpen={isOpen} navbar>
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
