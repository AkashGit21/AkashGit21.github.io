import React from 'react';
import SectionContainer from '../../containers/SectionContainer/SectionContainer';
import classes from './Education.css';

const eduData = [
    {
      standard:"Bachelors Of Technology (B. Tech)",
      institute: "Indian Institute Of Information Technology Surat (2017-21) ",
      scoreType: "Cumulative G.P.A",
      score: " 8.28 / 10.00 "
    },
    {
      standard:"Standard XIIth (H.S.C)",
      institute: "Delhi Public School (2016-17) ",
      scoreType: "Overall Percentage",
      score: " 92.40% / 100% "
    },
    {
      standard:"Standard Xth (S.S.C)",
      institute: "St. Joseph's Academy Ghaziabad (2014-15) ",
      scoreType: "Overall Percentage",
      score: " 94.00% / 100% "
    }
]

const education = () =>{
    return ( 
        <SectionContainer title="Education">
            <article className={classes.EducationContainer}>
                {eduData.map(edu => {
                    return (<section className={classes.EducationType} key={edu.standard}>
                        <section className={classes.Standard}> {edu.standard} </section>
                        <section className={classes.Institute}> {edu.institute} </section>
                        <section className={classes.Grade}> {edu.scoreType} </section>
                        <section className={classes.Score}> {edu.score} </section>

                    </section>
                    );
                } )}

            </article>

        </SectionContainer>
    );
}

export default education;