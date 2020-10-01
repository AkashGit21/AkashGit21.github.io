import React from 'react';
import classes from './Header.css';
import {NavLink} from 'react-router-dom';


const header = () => (
    <div className={classes.Header}>
        <header>
            <nav >
                <ul >
                    <li className={classes.Logo}> 
                        <NavLink exact to={{
                            pathname: "/",
                        }}
                        activeClassName={classes.myActive}> Logo </NavLink> </li>
                    <li><NavLink exact to= {{
                        pathname: "/about",
                        hash: '#about'
                        }}
                        activeClassName={classes.myActive}> About Me </NavLink></li>
                    <li> <NavLink exact to={{
                        pathname: "/activities",
                        hash: '#about'
                        }}
                        activeClassName={classes.myActive}> Activities </NavLink></li>
                    <li> <NavLink exact to={{
                        pathname: "/projects",
                        hash: '#about'
                        }}
                        activeClassName={classes.myActive}> Projects </NavLink> </li>
                    <li> <NavLink exact to={{
                        pathname: "/education",
                        hash: '#about'
                        }}
                        activeClassName={classes.myActive}> Education </NavLink> </li>
                    <li> <NavLink exact to={{
                        pathname: "/contact",
                        hash: '#about'
                        }}
                        activeClassName={classes.myActive}> Contact </NavLink> </li>
                    <li> <NavLink to="/#"> Resume </NavLink> </li>
                </ul>
            </nav>
        </header>
    </div> 
    );

export default header;