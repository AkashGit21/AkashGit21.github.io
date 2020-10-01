import React from 'react';
//import './SectionContainer.css';
import styled from 'styled-components';

const MainContainer = styled.main`
    width: 60%;
    height: 80vh;
    margin: 0;
    padding: 10vh 0 0 20%;
`;

const Title = styled.div`
    font-size: 60px;
    font-weight: bold;
    font-style: italic;
    text-align: right;
`;
const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const sectionContainer = (props)=>{
    return (
        <MainContainer>
            <Title>{props.title}</Title>
            <ContentContainer>{props.children}</ContentContainer>            
        </MainContainer>
    );
}

export default sectionContainer;