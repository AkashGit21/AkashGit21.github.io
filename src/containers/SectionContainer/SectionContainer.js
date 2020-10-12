import React from 'react';
import classes from './SectionContainer.css';

const sectionContainer = (props)=>{
    return (
        <article className={classes.SectionContainer}>
            <section className={classes.Title}>
                {props.title}
            </section>
            <section className={classes.ContentContainer}>
                {props.children}
            </section>
        </article>
    );
}

export default sectionContainer;