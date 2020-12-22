import '../App.css';
import React, { props } from "react";
import Header from "./Header";
import Profile from "./Profile";

const About = () => {
    /*const [title, setTitle] = useState("SWE @ UCSD");
    const [subtitle, setSubtitle] = useState("Aspire | Advance | Achieve")*/
    return (
        <div>
            <Header {...props}
                title="About"
                subtitle="" />
            <h3 id="about">UC San Diego Society of Women Engineers is a diverse group of passionate young engineers excited about women in STEM. Through outreach to K-12 students, socials with other female engineers, networking workshops with industry, and technical teams, UCSD SWE provides women engineers with a welcoming environment to grow professionally and academically.</h3>
            <h3 id="title">Meet Our Officers:</h3>
            <div id="profileRow">
                <Profile {...props}
                    name="Brea Torquato"
                    title="President"
                    imgSrc="https://i.imgur.com/DjlBbwM.jpg" />
                <Profile {...props}
                    name="Payal Singh"
                    title="Vice President External"
                    imgSrc="https://i.imgur.com/BZZyXFo.jpg" />
                <Profile {...props}
                    name="Maria Galvez"
                    title="Vice President Internal"
                    imgSrc="https://i.imgur.com/Y6rOo3m.jpg" />
            </div>
            <div id="profileRow">
                <Profile {...props}
                    name="Anne Cardenas"
                    title="Treasurer"
                    imgSrc="https://i.imgur.com/T5fttM0.jpg" />
                <Profile {...props}
                    name="Maria Andrade"
                    title="Secretary"
                    imgSrc="https://i.imgur.com/gYGheeA.jpg" />
                <Profile {...props}
                    name="Agnes Garcia"
                    title="Envision Outreach Chair"
                    imgSrc="https://i.imgur.com/GaHPYPQ.jpg" />
            </div>
            <div id="profileRow">
                <Profile {...props}
                    name="Magali Chavez"
                    title="ABLE Outreach Chair"
                    imgSrc="https://i.imgur.com/uDqIHtx.jpg" />
                <Profile {...props}
                    name="Nidhi Bangari"
                    title="SWENext Outreach Chair"
                    imgSrc="https://i.imgur.com/7joiTCv.jpg" />
                <Profile {...props}
                    name="Sophie Huang"
                    title="Academic Chair"
                    imgSrc="https://i.imgur.com/0adO7RP.jpg" />
            </div>
            <div id="profileRow">
                <Profile {...props}
                    name="Madina Arman"
                    title="Project Team Coordinator"
                    imgSrc="https://i.imgur.com/Kc9mKsA.jpg" />
                <Profile {...props}
                    name="Elianor Shohet"
                    title="Publicity Chair"
                    imgSrc="https://i.imgur.com/y0hJ4sH.jpg" />
                <Profile {...props}
                    name="Natalie Lopez"
                    title="Social Chair"
                    imgSrc="https://i.imgur.com/XcMFcGL.jpg" />
            </div>

        </div>
    );
}

export default About;