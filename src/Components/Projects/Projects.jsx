import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

import './Projects.css'

// TODO: Add animation to project photos in desktop view
// TODO: Update images to show it is mobile responsive with images on phones, tablets, and desktop for each project

const Projects = () => {
    return (
        <div className="projects-container" id='portfolio'>
            <h1 className="project-title">Projects</h1>
            <hr />
            {/* Admin Dashboard */}
            <div className="project-card-container">
                <div className="project-container">
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="https://github.com/QasimAK191/react-admin-dashboard-crud/raw/master/demo_imgs/ecomm_fp.JPG" />
                        <Card.Body>
                            <Card.Title>Admin Dashboard App</Card.Title>
                            <Card.Text className="card-text">
                                Developed an admin dashboard web application that efficiently manages and tracks company tasks, employing Node.js and Express.js for the backend, and React for the front-end components
                            </Card.Text>
                            <div className="card-button-container">
                                <Button href="https://react-admin-dashboard-crud.vercel.app//" target="_blank" variant="success">Live Demo</Button>
                                <Button href="https://github.com/QasimAK191/react-admin-dashboard-crud" target="_blank" variant="warning">GitHub</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <br />

                {/* E-commerce store */}
                <div className="project-container">
                    <Card style={{ width: '100%' }}>
                        
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP._NlHR5jEdfR47P0PaAmeqAAAAA?pid=ImgDet&rs=1" />
                        <Card.Body>
                            <Card.Title>E-Commerce App</Card.Title>
                            <Card.Text>
                            A Django E-commerce 
                            </Card.Text>
                            <br />
                            <div className="card-button-container">
                                <Button href="#" target="_blank" variant="success">Live Demo</Button>
                                <Button href="https://github.com/QasimAK191/django-ecommerce-app" target="_blank" variant="warning">GitHub</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                
                

            </div>
        </div>
    ) 
}

export default Projects;