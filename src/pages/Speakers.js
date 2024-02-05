// pages/About.js

import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import NavAside from "../components/NavAside";
import MainColumn from "../components/MainColumn"
import RenderMarkdown from "../components/RenderMarkdown";


const filePath = "/pages-markdown/marky-mark.md"
const Speakers = () => (

        <MainColumn>
            <>speakers</>
                <RenderMarkdown filePath={filePath}/>
        </MainColumn>
);

export default Speakers;

