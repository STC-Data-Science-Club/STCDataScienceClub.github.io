import React, { useState } from "react";
import { Columns } from "react-bulma-components";
import { Link } from "react-router-dom";
import Photo from "../components/Photo";
import styled from "styled-components";

const ColumnWrapper = styled.div`
/* Mobile devices (portrait and landscape) */
@media only screen and (max-width: 575px) {
  /* CSS for small screens (e.g., smartphones) */
 display: none;
}

/* Tablets and small desktops */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* CSS for tablets and small desktops */
  padding: 16px;
    margin: 16px;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #fff;
}

/* Medium desktops */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* CSS for medium desktops */
    padding: 1em;
    margin: .5em;
    position: fixed;
    height: 100%;
    width: 100%
}

/* Large desktops and beyond */
@media only screen and (min-width: 992px) {
  /* CSS for large desktops and beyond */
    padding: 16px;
    margin: 16px;
    position: fixed;
    height: 100%;
    width: 100%
}
`;

const List = styled.ul`
padding: 1em;
list-style-type: none;
`;
const ListItem = styled.li`

`;
const StyledLink = styled(Link)`
 color:#33cccc;
 font-size: x-large;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: #9999ff;
}
&:active{
    color: red;
};
`;

const NavAside = () => (
   <ColumnWrapper>
    <Photo size='aside'/>
    <List>
        <ListItem><StyledLink to="/">home</StyledLink></ListItem>
        <ListItem><StyledLink to="/about">about</StyledLink></ListItem>
        <ListItem><StyledLink to="/events">events</StyledLink></ListItem>
        <ListItem><StyledLink to="/speakers">speakers</StyledLink></ListItem>
        <ListItem><StyledLink to="/team">team</StyledLink></ListItem>
        <ListItem><StyledLink to="/projects">projects</StyledLink></ListItem>
    </List>
   </ColumnWrapper>
)
export default NavAside;