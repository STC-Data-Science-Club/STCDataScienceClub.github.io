// pages/About.js

import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import NavAside from "../components/NavAside";

const aboutText = `### Hi there 👋
Welcome to the STC Data Science Club!!

The STC Data Science Club is more than just a club; it's a community of individuals passionate about exploring the vast landscape of data science. We look forward to meeting you, sharing knowledge, and creating memorable experiences together. Come join us as we outline our vision, discuss upcoming events, and most importantly, hear from you! We value your input and believe that every member plays a crucial role in shaping the future of our club. Bring your ideas, questions, and enthusiasm – let's make this a collaborative and engaging experience for everyone.

At the heart of our club is a commitment to fostering creativity and individual exploration. We encourage all members to actively participate in shaping the direction of our endeavors. If you have a passion project or a data science topic that fascinates you, we want to hear about it! Our club is a platform for you to bring your ideas to life, so don't hesitate to share your project proposals and topics of interest. Whether it's a hands-on project, a discussion on the latest trends, or a deep dive into a specific area of data science, your contributions are valued and welcomed. Let's turn your passion into a collaborative initiative that benefits the entire community. Together, we can transform your ideas into impactful projects and discussions that elevate the STC Data Science Club experience for everyone. 
`
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* Mobile devices (portrait and landscape) */
@media only screen and (max-width: 575px) {
  /* CSS for small screens (e.g., smartphones) */
}

/* Tablets and small desktops */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* CSS for tablets and small desktops */
  margin: 0 5% 0 15%;
}

/* Medium desktops */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* CSS for medium desktops */
  margin: 0 5% 0 20%;
}

/* Large desktops and beyond */
@media only screen and (min-width: 992px) {
  /* CSS for large desktops and beyond */
    margin: 0 30%  0 20%;
}
`;
const Column  = styled.div`
    flex: 1;
    padding: 16px;
    margin: 8px;
`;
const MainColumn = styled.div`
    flex: 3;
    width: 40%;
    padding: 16px;
`;
const About = () => (
    <ColumnWrapper> 
  <MainColumn>
    <ReactMarkdown>
    {aboutText}
    </ReactMarkdown>
  </MainColumn>
  </ColumnWrapper>
);

export default About;

