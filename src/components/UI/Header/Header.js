import React from 'react';
import classes from './Header.css';
import {NavLink} from 'react-router-dom';
import {SiGmail} from 'react-icons/si';
import {GiGraduateCap} from 'react-icons/gi';
import { VscFolderActive } from "react-icons/vsc";
import { IoMdPerson } from "react-icons/io";
import { MdLocalActivity } from 'react-icons/md';

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
                        activeClassName={classes.myActive}><IoMdPerson/> About Me </NavLink></li>
                    <li> <NavLink exact to={{
                        pathname: "/activities",
                        hash: '#about'
                        }}
                        activeClassName={classes.myActive}><MdLocalActivity/> Activities </NavLink></li>
                    <li> <NavLink exact to={{
                        pathname: "/projects",
                        hash: '#about'
                        }}
                        activeClassName={classes.myActive}><VscFolderActive/> Projects </NavLink> </li>
                    <li> <NavLink exact to={{
                        pathname: "/education",
                        hash: '#about'
                        }}
                        activeClassName={classes.myActive}><GiGraduateCap/> Education </NavLink> </li>
                    <li> <NavLink exact to={{
                        pathname: "/contact",
                        hash: '#about'
                        }}
                        activeClassName={classes.myActive}><SiGmail/> Contact </NavLink> </li>
                    <li> <a href="https://drive.google.com/file/d/18qrrwccfsEuozU3hvZmHIkZZZknyW3v2/view?usp=sharing"> Resume </a> </li>
                </ul>
            </nav>
        </header>
    </div> 
    );

export default header;