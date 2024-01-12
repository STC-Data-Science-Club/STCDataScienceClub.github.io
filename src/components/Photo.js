import React from "react";
import styled from "styled-components";
import headshot from "../images/headshot.svg";
import logo from "../images/logo.png";

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
const Logo = styled.img`
    height: 3vmin;
    pointer-events: none;
    animation: App-logo-spin infinite 20s linear;
    @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
`;

const Photo = (props) => {
    if(props.size == 'aside') {
        return (
        <Wrapper>
            <ImageSmall src={headshot} />
            <Text>
                Jonathan Koerber
            </Text>
        </Wrapper>
        );
    }

    if(props.size === 'full') {
        return (
        <Wrapper>
            <Image src={headshot} />
            <Text>
                <Logo src={logo}/>Jonathan Koerber <code>README.md</code>
            </Text>
        </Wrapper>
);
        };
    }
export default Photo;