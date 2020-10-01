import React from 'react';
import classes from './Footer.css';
import Github from '../Icons/Github';
import Facebook from '../Icons/Facebook';
import Linkedin from '../Icons/Linkedin';
import Gmail from '../Icons/Gmail';

const footer = () =>(
    <div className={classes.Footer}>
        <div className={classes.Icons}>
            <a href="https://github.com/AkashGit21">  <Github/>  </a>
            <a href="https://www.linkedin.com/in/akashgzb21/">  <Linkedin/>  </a>
            <a href="mailto:akashgzb98@gmail.com">  <Gmail/>  </a>
            <a href="https://www.facebook.com/akgthegreat">  <Facebook/>  </a>
        </div>
        <p> &copy; Created by Akash Gupta | akashgzb98@gmail.coom</p>
    </div>
);

export default footer;