// pages/Home.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Photo from "../components/Photo";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const StyledLink = styled(Link)`
    color: #33cccc;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    &:hover,
    &:focus {
        color: #9999ff;
    }

    &:active {
        color: #043ac4;
    }
`;
const Home = () => (

  <Wrapper>
    <header className="App-header" size = 'full'>
        <Photo size = 'full'/>
    <div className="links">
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/events">Events</StyledLink>
        <StyledLink to="/speakers">Speakers</StyledLink>
        <StyledLink target="_blank" to="https://github.com/STCDataScienceClub">GitHub</StyledLink>
      </div>
      </header>
</Wrapper>
);

export default Home;
