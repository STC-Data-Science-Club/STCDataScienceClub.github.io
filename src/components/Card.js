// Card.js
import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import headshots from "../images/speaker_headshots/headshots";

// Styled components for the card
const CardWrapper = styled.div`
  width: 100%;
  border: 1px solid #ddd;
    import images from "../images/speaker_headshots";
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    // display as row
    display: flex;
    flex-direction: row;
`;

const CardImage = styled.img`
    display: block;
    margin: 10px;
    border-radius: 8px;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
    display: block;
  padding: 16px;
`;

const CardTitle = styled.h2`
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  color: #555;
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
// Card component
const Card = ({ title, subtitle,  date, description, imageKey, link}) => {
    return (
        <CardWrapper>
            <CardImage  src={headshots[imageKey]} alt="Card" />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{date}</CardDescription>
                <CardDescription>{subtitle}</CardDescription>
                <CardDescription>{description}</CardDescription>
                <StyledLink target="_blank" to={link}>LinkedIn</StyledLink>
            </CardContent>
        </CardWrapper>
    );
};

export default Card;
