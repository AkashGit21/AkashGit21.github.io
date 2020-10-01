import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../../containers/SectionContainer/SectionContainer';

const PersonalDetails = styled.section`
    width: 100%;
`;

 const Content = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
    margin-left: 30%;
`;
const Greeting = styled.div`
    font-weight: lighter;
    font-style: italic;
`;
const Name = styled.h1`
    font-weight: bolder;
    font-style: italic;
    font-size: 60px;
`;

const RecruitButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 5px;
    color: solid green;
    border: 2px solid green;
`;

const mainElement = ()=>{
    return (
        <SectionContainer>
            <PersonalDetails>
                <Content>
                    <Greeting>Hi folks, I am </Greeting>
                    <Name> Akash Gupta </Name>
                    <p> I am an enthusiast Competitive Programmer and Web Developer.</p>
                    <p> I love exploring new things and work on new Projects.</p>
                    <p> I like to play outdoor Sports like Football, VolleyBall, etc. </p>
                </Content>
            </PersonalDetails>
            <a href="mailto:akashgzb98+recruit@gmail.com"><RecruitButton> Recruit Me</RecruitButton></a>
        </SectionContainer>
    );
}

export default mainElement;