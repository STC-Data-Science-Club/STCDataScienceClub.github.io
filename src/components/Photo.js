import React from "react";
import styled from "styled-components";
import image from "../images/ws7Q0-removebg-preview.png";


const Wrapper = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Image = styled.img`
    height: 30vmin;
    pointer-events: none;
`;
const Text = styled.p`
    @media only screen and (min-width: 576px) and (max-width: 767px) {
  /* CSS for tablets and small desktops */
  font-size: .75em;
}
    color: #282c34;
    font-size: 1.5em;
`;
const ImageSmall = styled.img`
    height: 10vmin;
    pointer-events: none;
`;


const Photo = (props) => {
    if(props.size == 'aside') {
        return (
        <Wrapper>
            <ImageSmall src={image} />
            <Text>
                Data Science Club
            </Text>
        </Wrapper>
        );
    }

    if(props.size === 'full') {
        return (
        <Wrapper>
            <Image src={image} />
            <Text>
                STC Data Science Club <code>README.md</code>
            </Text>
        </Wrapper>
);
        };
    }
export default Photo;