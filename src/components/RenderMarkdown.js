// pages/About.js

import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";



const RenderMarkdown = (props) => {
    const [markdownContent, setMarkdownContent] = useState('');
    console.log(props.filePath)
    useEffect(() => {
        // Assuming you have a way to fetch the Markdown content (e.g., from a file)
        const fetchMarkdownContent = async () => {
            try {
                const response = await fetch(props.filePath); // Update with your file path or URL
                const content = await response.text();
                setMarkdownContent(content);
            } catch (error) {
                console.error('Error fetching Markdown content:', error);
            }
        };

        fetchMarkdownContent();
    }, []);

    return (
                <ReactMarkdown >
                    {markdownContent}
                </ReactMarkdown>
    )};

export default RenderMarkdown;

