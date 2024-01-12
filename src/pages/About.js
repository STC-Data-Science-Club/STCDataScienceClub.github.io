// pages/About.js

import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import NavAside from "../components/NavAside";

const aboutText = `### Hi there 👋



Has generative AI replaced us all? Not yet. While we've made significant strides with Large Language Models (LLMs), these powerful resources haven't replaced humans' unique insights and capabilities. Our comparative lack of computational capacity is, in fact, our greatest strength. As technology floods us with vast amounts of data, it's people like me who can distill meaning from the noise.

I'm an MSCS student at City University of Seattle, specializing in computer science and driven by the pursuit of a deep understanding of CS concepts. My journey as a teaching assistant in the School of Technology and Computing at City University of Seattle has been transformative. Here, I connect with students and actively support faculty across diverse projects, sharpening my ability to streamline processes and address real-world challenges head-on.

What sets me apart is my willingness to invest in software engineering efforts to build enhancements that directly lead to measurable results. In one example, I leveraged my expertise in software development and Rust to create a powerful CLI tool. This project started as a fun weekend experiment but soon translated into remarkable productivity gains. The tool effectively manages our repository and automates content delivery to GitHub Classrooms, saving valuable time and energy for both me and my team.

In addition to my proficiency in JavaScript and Python, I have ventured into newer territories such as Power Apps and Power Automate. This journey outside my comfort zone has allowed me to develop creative solutions for real-world problems, showcasing my versatility and adaptability.

I'm actively seeking a role where I can apply my problem-solving abilities, effective communication skills, and collaborative spirit to deliver exceptional results that align with the unique needs of clients and stakeholders. Let's connect and explore how we can join forces to drive meaningful progress in the ever-evolving landscape of computer science. Reach out, and together, let's embark on this exciting journey!

Best regards,

Jonathan Koerber

- 🔭 I’m currently working on ...
    A CLI tool to help manage github classroom assignments in Rust
- 🌱 I’m currently learning ...
  Rust... MS Power Platform because who has time to code everything
- 👯 I’m looking to collaborate on ... open source projects
  Innovative Technology for a Smarter Future
- 🤔 I’m looking for help with ... navigating the job market
- 💬 Ask me about ... baking great bread and pizza
- 📫 How to reach me: jonathankoerber@gmail.com
- ⚡ Fun fact: ... fascinated with history`
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
  margin: 0 10% 0 20%;
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

