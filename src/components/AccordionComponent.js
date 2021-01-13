import React, {Component} from 'react'
import {PROJECTS} from '../shared/projects'
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Accordion extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            projects: PROJECTS
        }
    }

    render(){
        const directory = this.state.projects.map(project => {
            let title = <h2 data-event={project.id+1} key={project.id} >{project.name}</h2>
            let count = 0
            let tag = project.tags.split(', ').map(i=>{
                count++
                return <h5 key = {count} style = {{textTransform:"uppercase"}}>{i}</h5>

            })
            return(   
            <div key = {project.id}> 
                    <Row>
                    <div className = "order-lg-2 col-lg-6 offset-lg-1 mainContainer" style={{backgroundColor:`${project.color}`, backgroundImage: `url(${project.backgroundImage})`}}>
                            <h1 className = "largeText textTop">{project.text1}</h1>
                            <div className = "reveal crop-image">
                            <div className = "reveal-after" style={{background:`${project.color}`}}></div>
                            <img src = {project.coverImage.src} style = {{width:"100%", height:"100%", objectFit:"cover"}} alt={project.coverImage.alt}/>
                            {/* <div className = "mainImg" style = {{backgroundImage: `url(${project.coverImage})`}}></div>    */}
                            </div>
                            <h1 className = "largeText textBottom">{project.text2}</h1>
                       </div>
                       <span className = "spacer"></span>
                        <div className = "col-lg-5">
                        {title}
                        <div style= {{paddingTop: "1rem", paddingBottom:"1rem"}}>{tag}</div>
                        <p style= {{paddingTop: "1rem"}}>{project.description}</p>
                        <NavLink to={`${project.url}`} >
                            <h3 style= {{paddingTop: "1rem", paddingBottom: "1rem"}}>More</h3>
                        </NavLink>
                        </div>
                    </Row>
                    <div className = "spacer"></div>
                   
            </div>
            )
        })

        return(
            <Container className="accordion-lines">
                {directory}
                </Container>
        )
    }
}

export default Accordion;
