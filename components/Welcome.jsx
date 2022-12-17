import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Main, Title, Description, Body } from '../components/sharedstyles'

const Welcome = ({welcome, toggleWelcome}) => {
    return (
        <WelcomeContainer isOpen={welcome} onClick={toggleWelcome}>
            <Icon onClick={toggleWelcome}>
                <CloseIcon />
            </Icon>
            
      <Main>
        <Title>
          Welcome <a href="https://www.facebook.com/groups/cadreamers">Aspirants!</a>
        </Title>

        <Description>
          This website is only meant to provide additional information. <a href="https://www.facebook.com/groups/cadreamers">Click here to join our group.</a>
        </Description>
        <Description>
          Please go to the <a href="https://www.canada.ca/en.html">official website of the Government of Canada </a> for accurate information.
        </Description>
        <Description>
          Click or touch anywhere to close
        </Description>
      </Main>
            
        </WelcomeContainer>
    );
};

export default Welcome

const WelcomeContainer = styled.aside`
    position: fixed;
    margin: 5vh 10vw 10vh 10vw;
    z-index: 999;
    width: 80vw;
    height: 85vh;
    background: gray;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '90%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
    color: white;
   &:hover {
   color: red;
   }
`

const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 1rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
   outline: none;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    text-align: center;

   &:hover {
    background-color: white;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    padding: 1rem 1.5rem;}
`;

