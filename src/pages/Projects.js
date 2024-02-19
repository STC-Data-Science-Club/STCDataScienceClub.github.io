// pages/About.js

import React from "react";
import styled from "styled-components";
import MainColumn from "../components/MainColumn";
import projects from "../data/project_data";
import Card from "../components/Card";
import project_images from "../images/project_images/projects_images"

const Text = styled.p`
font-size: x-large;
`;
const Projects = () => (

        <MainColumn>
            <Text>Projects</Text>
            {
                projects.map((item, index) =>(
                    <Card key={index}
                          title={item.title}
                          subtitle={item.subtitle}
                          date={item.date}
                          description={item.description}
                          image={project_images[item.imageKey]}
                    />
                ))
            }
        </MainColumn>
);

export default Projects;

