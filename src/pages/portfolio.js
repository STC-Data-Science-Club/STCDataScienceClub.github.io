
import React from "react";
import styled from "styled-components";
import NavAside from "../components/NavAside";
import ProjectCard from "../components/ProjectCard";
import headshot from "../images/headshot.svg";
import armi_logo from "../images/armi-logo.png";
import mfa_icon from "../images/mfa.png";
import dns_pic from "../images/dns.png";
import cli from "../images/cli.png";
import open_source from "../images/open-source-code.png";
import volunteer from "../images/volunteer.png";
import message_board from "../images/message-board.png";
import vurify_logo from "../images/viryfy.jpeg";
import iSeaTree from "../images/iSeaTree.jpeg";

const osProjects = [
    {
        imgUrl: cli,
        title: "Templating Repo",
        type: "Personal",
        role: "Software Engineer",
        body: `This CLI tool provides functionality for repository management and organization.`,
        websiteLink: "https://github.com/JonathanKoerber/template_repos",
        githubLink: "https://github.com/JonathanKoerber/template_repos"
    
        },
    {
    imgUrl: volunteer,
    title: "Virufy",
    type: "Open Source",
    role: "Software Engineer",
    body: `Virufy is a nonprofit research organization developing artificial intelligence 
    (AI) technology to rapidly screen for COVID-19 from cough patterns, through use of a smartphone at no cost.`,
    websiteLink: "https://virufy.org/en/",
    githubLink: "https://github.com/virufy/study"

    },
    {
        imgUrl: mfa_icon,
        title: "MultiFactor Authenticator",
        type: "Team Project City University",
        role: "Software Engineer",
        body: `This project is the coding portion of the final project for the course. It is a REST API authentication service. The backend is written in Python using the Flask framework, using a MySQL database that Adminer administers.`,
        websiteLink: "https://github.com/JonathanKoerber/CS504_groupproject",
        githubLink: "https://github.com/JonathanKoerber/CS504_groupproject"
    
        },
    {
        imgUrl: dns_pic,
        title: "DNS Lookup Server",
        type: "Team Project City University",
        role: "Software Engineer",
        body: `This project I created to test lookup functionality of diffrent dada types. It is a REST API using Flask.`,
        websiteLink: "https://github.com/JonathanKoerber/dns_server",
        githubLink: "https://github.com/JonathanKoerber/dns_server"
    
        },
    {
    imgUrl:open_source,
    title: "ISeaTree",
    type: "Volunteer",
    role: "Software Engineer",
    body: `The iSeaTree project is an open source project for building the react-native iSeaTree app. This project utilizes the USDA's US Forest Service iTree API to calculate the individual CO2/Stormwater tree benefits of trees.`,
    websiteLink: "https://github.com/TreeMama",
    githubLink: "https://treemama.org/the-tech-treehouse/iseatree/"
    },
    {
     imgUrl:message_board,
     title: "WGU Capstone",
     type: "Bachlors Capstone WGU ",
     role: "Student",
     body: `This started as my capstone project at WGU. It uses the Flask framework with Handlebars to build UI templates with an SQLite database. Search functionalty was added later using ElasticSearch.`,
     websiteLink: "https://github.com/JonathanKoerber/wgu_capstone",
     githubLink: "https://github.com/JonathanKoerber/wgu_capstone"
     }

]
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 10% 0 20%;
`;
const Column  = styled.div`
    flex: 1;
    padding: 16px;
    margin: 8px;
`;
const MainColumn = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`;
const RightColum = styled.div`
  // midia query for mobile devices larger than 575px
    @media only screen and (min-width: 1000px) {
      padding: 16px;
      margin: 16px;
      width: 33%;
      position: fixed;
      height: 100%;
    }
`;
const Portfolio = () => (
    <ColumnWrapper> 
    <MainColumn>
  
    {osProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
    ))}
    </MainColumn>
    <Column>
 <RightColum/>
 </Column>
  </ColumnWrapper>
);

export default Portfolio;
                                                     
                                