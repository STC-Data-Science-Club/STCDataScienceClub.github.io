// pages/About.js

import React, {useEffect, useState} from "react";
import styled from "styled-components";
import MainColumn from "../components/MainColumn";
import Card from "../components/Card";
import events from "../data/event_data"

const Text = styled.p`
    font-size: x-large;
`;
const filePath = "/pages-markdown/marky-mark.md"
const Events = () => {



    return (
    <MainColumn>
        <Text>Upcoming Events</Text>
        {
            events.map((item, index) =>(
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
)};

export default Events;

