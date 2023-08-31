import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import ResumeButton from "../ResumeButton/ResumeButton";
import Button from "react-bootstrap/Button";

import './HomeScreen.css'
const goToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
};

const HomeScreen = () => {
    return (
        <div id='hero' className="home-main-photo h-100vh">
            <div className="home-container">
                <div className="home-text-container">
                    <h5 className="home-subtext">Hello, I'm</h5>
                    <h4 className="home-name-text">Mohammed Qasim Khan</h4>
                </div>
                <br />
                <div className="typewriter-container">
                    <br />
                    <TypeWriterEffect
                        className="typewriter"
                        loop={false}
                        startDelay={2000}
                        cursorColor="yellow"
                        multiText={[
                            ' A Computer Science graduate. ',
                            ' Full-Stack Developer.',
                            ' Software Engineer.',
                        ]}
                        multiTextDelay={1000}
                        multiTextLoop={true}
                        typeSpeed={50}
                    />
                </div>
                <br /><br /><br />
                <div className="home-button-container">
                    <ResumeButton></ResumeButton>
                    {/* <ScrollToBottom /> */}
                    <Button
                        onClick={goToBottom}
                        variant="warning"
                        // size="lg"
                    > Let's Connect! </Button>
                </div>
            </div>
        </div>
    )
}
export default HomeScreen;