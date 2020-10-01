import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../../containers/SectionContainer/SectionContainer';

const Education = styled.article`
    width: 100%;
    padding-left: 10%;
    padding-top: 10%;    
`;

const EducationType = styled.section`
    background-color: white;
    color: black;
    width: 100%;    
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`;

const Standard = styled.div`
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 40%;
    text-align: left;
`;

const Institute = styled.div`
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 60%;
    text-align: left;
`;

const Grade = styled.div`
    display: inline-block;
    margin-bottom: 10px;
    padding: 0;
    width: 40%;
    font-style: italic;
    text-align: left;
`;

const Score = styled.div`
    display: inline-block;
    margin-bottom: 10px;
    padding: 0;
    font-weight: bold;
    width: 60%;
    text-align: leftt;
`;

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
        <Education>
            {eduData.map(edu => {
                return( <EducationType key={edu.standard}> 
                            <Standard> {edu.standard} </Standard> 
                            <Institute> {edu.institute} </Institute>
                            <Grade> {edu.scoreType} </Grade>
                            <Score> {edu.score} </Score>
                        </EducationType>);
            })}
        </Education>
        </SectionContainer>
        
    );
}

export default education;