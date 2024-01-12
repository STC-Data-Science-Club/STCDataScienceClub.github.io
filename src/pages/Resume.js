import React, {useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";



const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 20% 0 20%;
`;

const MainColumn = styled.div`
    flex: 3;
    width: 66%;
    padding: 16px;
    margin-right: 33%
`;

const resume = `## Jonathan Koerber

Seattle, 98116 | 2068179893

koerberjonathan@cityuniversity.edu


I'm an MSCS student at City U Seattle, working as a teaching assistant. Here, I apply critical thinking and technical skills to provide end-user support to students and faculty. I handle service requests by individuals to share my technical knowledge and provide IT support.

**EDUCATION**

**Master's Degree - Computer Science** Jan 2023 - Jun 2024 (Expected)

_City University of Seattle, Seattle, WA_

**Bachelor of Science (B.S.) - Software Development** May 2016 - Jun 2020

_Western Governors University, Seattle, WA_

**EXPERIENCE**

**Teaching Assistant - Part Time** Jun 2023 - Present

_City University of Seattle, Seattle, WA_

- Developed technical curriculum for enhanced student learning.
- Built MS Power Platform help desk application to streamline IT operations.
- Provided technical application end-user support to students.
- Successfully tested and troubleshoot the Data Science curriculum using Python.
- Collaborated with educational stakeholders to improve workflows and enhance student engagement.
- Provide positive verbal and written communication to a diverse student base.
- Managed learning management systems and instructional materials for an organized learning environment.

**Cook -Trainer** Jul 2017 - May 2023

_FareStart, Seattle_

- Work independently to prioritize multiple tasks by thinking strategically and problem-solving.
- Translated complex business processes into an interactive Salesforce prototype, demonstrating system value to stakeholders.
- Was a versatile part of a multifunctional team.
- Innovated recipes and create standard operating procedures to enhance product quality and customer satisfaction, aligning with industry best practices

**SKILLS**

**Intermediate in:** Python3, JavaScript, SQL, Project Management, Low Code, Git

**Basic in:** Rust, Java, Bash, AWS

**LICENSES & CERTIFICATIONS**

**IT Automation with Python** 2021

_Google_

**JavaScript Algorithms and Data Structures** 2021

_FreeCodeCame_

**Scientific Computing with Python** 2021

_FreeCodeCamp_

**ITIL Foundation** 2018

_AXELOS Global Best Practice_

**Project +** 2017

_CompTIA_

**MTA-396 Database Foundations** 2016

_Microsoft_

**CIW Advanced HTLM5 and CSS3** 2016

_CIW_

**VOLUNTEER**

**Software Developer** Jun 2023 - Present

_Virufy_

- Development automation in Google Workspace that automated checking names against TSDB, significantly improving efficiency in human resources projects.
- I have demonstrated my organizational skills by developing a Docker development container to improve the developer experience.
- Assisted in debugging and troubleshooting React JavaScript application.

**Software Engenier** Nov 2020 - Oct 2021

_iSeaTree_

- Developed a vital location service component, ensuring seamless integration for an enhanced user experience.
- Swiftly resolved reported bugs by identifying root causes and implementing effective fixes.
- Own the leadership of upgraded project dependencies, ensuring optimal performance and security.`


const Resume = () => {
        // Call the fetch function
        
    return (
      <Wrapper>
        
        <MainColumn>
          <ReactMarkdown >
            {resume}
          </ReactMarkdown>
        </MainColumn>
      </Wrapper>
      
    );
  };
  
  export default Resume;