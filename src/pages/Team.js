// pages/About.js

import React from "react";
import styled from "styled-components";
import MainColumn from "../components/MainColumn";
import team from "../data/team_data";
import Card from "../components/Card";

const Text = styled.p`
    font-size: x-large;
`;

const Team = () => (

        <MainColumn>
            <Text>Meet our Team</Text>
            {
                team.map((item, index) =>(
                    <Card key={index}
                          title={item.title}
                          subtitle={item.subtitle}
                          date={item.date}
                          description={item.description}
                          imageUrl={item.image}
                    />
                ))
            }
        </MainColumn>
);

export default Team;

