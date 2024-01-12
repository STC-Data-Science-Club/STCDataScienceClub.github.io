// pages/school.js

import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import NavAside from "../components/NavAside";

const aboutText = `### Hi there 👋



I'm thrilled to connect with you and discuss your technology needs. As a dedicated student pursuing a Master's degree in Computer Science, I have a natural curiosity for understanding systems. My focus lies in delving into the "why," "what," and "who" aspects, and then devising a comprehensive plan for their implementation.

I strongly believe in taking a rigorous approach throughout all stages of development. By doing so, I can ensure the creation of a versatile product that precisely meets the unique requirements of my clients. I am committed to delivering exceptional results by leveraging my technical skills, analytical mindset, and problem-solving abilities.

I am passionate about exploring emerging technologies and staying up-to-date with the latest industry trends. This allows me to constantly broaden my knowledge and apply innovative solutions to real-world challenges. Collaboration and effective communication are vital to me, as I thrive in team environments where ideas are shared and refined.

Let's connect and discuss how I can contribute to your technology initiatives. I'm eager to learn from your expertise and work together to drive meaningful progress in the ever-evolving world of computer science.

Feel free to reach out, and let's embark on this exciting journey together!

Best regards,

Jonathan Koerber

- 🔭 I’m currently working on ...
  Firefox addOn to create a cover letter from a LinkedIn job post. 
- 🌱 I’m currently learning ...
  Rust... Trying to learn Rust
- 👯 I’m looking to collaborate on ...
  Innovative Technology for a Smarter Future
  <!---
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...

- ⚡ Fun fact: ...
-->`
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const Column  = styled.div`
    flex: 1;
    padding: 16px;
    margin: 8ps;
`;
const MainColumn = styled.div`
    flex: 3;
    width: 66%;
    padding: 16px;
`;
const School = () => (
    <ColumnWrapper> 
    <Column>
    <NavAside/>
    </Column>
  <MainColumn>
    <ReactMarkdown>
    {aboutText}
    </ReactMarkdown>
  </MainColumn>
  </ColumnWrapper>
);

export default School;

