import React from 'react';
import SectionContainer from '../../containers/SectionContainer/SectionContainer';
import classes from './Contact.css';

const contact = () =>{
    return ( 
        <SectionContainer title="Contact Me">
            <h2 className={classes.Heading}>Get In Touch!</h2> 
            <section className={classes.InfoContainer}> 
                You are only one step away from me! Get in touch with me to provide your outstanding ideas, remarkable reviews, collaboration opportunities, 
                technical discussions, improvement suggestions, social networking or to meet over a coffee.
            </section>
            <a href='mailto:akashgzb98@gmail.com?subject=Hi Akash!'> <button className={classes.Button}> Say Hi! </button> </a>
        </SectionContainer>
    );
}

export default contact;