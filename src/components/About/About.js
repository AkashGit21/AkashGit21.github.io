import React from 'react';
import SectionContainer from '../../containers/SectionContainer/SectionContainer';
import Pic from '../../assets/myPic.jpg';
import classes from './About.css';
import { TiPointOfInterestOutline } from "react-icons/ti";

const about = (props) =>{
    return ( 
        <SectionContainer title="About Me"> 
            <article className={classes.AboutContainer}> 

                <img className={classes.ImgContainer} src={Pic} alt="Akash Gupta"></img>
                
                <section className={classes.InfoContainer}>
                    <section className={classes.Details}> Hi, My name is Akash Gupta. I am a final year undergraduate from IIIT Surat, currently pursuing Bachelor's degree in Computer Science. </section>
                    <section className={classes.Details}> I am an enthusiast Competitive Programmer and Web Developer. I love exploring technologies &amp; learning new skills. </section>
                    <section > Here are the technologies I love working on: </section>
                    <ul>
                        <li><TiPointOfInterestOutline/> C / C++ </li>     <li><TiPointOfInterestOutline/> OOPS </li>     <li><TiPointOfInterestOutline/> React JS </li> 
                        <li> <TiPointOfInterestOutline/> JavaScript </li>    <li> <TiPointOfInterestOutline/> Firebase</li>    <li> <TiPointOfInterestOutline/> MongoDB</li> 
                        <li> <TiPointOfInterestOutline/> MySQL </li>    <li> <TiPointOfInterestOutline/> HTML &amp; CSS </li>    <li> <TiPointOfInterestOutline/> Git / Github </li> 
                    </ul>
                </section>
            </article>
        </SectionContainer>
    );
}

export default about;