// pages/About.js

import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import NavAside from "../components/NavAside";

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
  margin: 0 0 0 20%;
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
const Events = () => (
    <ColumnWrapper>
        <>Events</>
        <MainColumn>
            <ReactMarkdown>
                {}
            </ReactMarkdown>
        </MainColumn>
    </ColumnWrapper>
);

export default Events;

