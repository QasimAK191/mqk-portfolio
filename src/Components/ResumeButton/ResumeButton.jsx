import React from "react";
import Button from "react-bootstrap/Button";
import pdf from '../../static/mohammedqasim-khan-resume.pdf'

const ResumeButton = () => {
    return (
        <div>
            <Button 
                variant="warning" 
                href={pdf} 
                target="_blank" 
                rel="noreferrer"
                color="yellow"
                >
                    Download Resume
            </Button>
        </div>
    )
}
export default ResumeButton;