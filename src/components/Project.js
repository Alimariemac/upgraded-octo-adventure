import {React, Component, Fragment} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import Header from './HeaderComponent';
import NonIllustrationComponent from './NonIllustrationComponent'
import IllustrationComponent from './IllustrationComponent'
import { NavLink } from 'react-router-dom';
import { PROJECTS } from '../shared/projects';
import SeeSiteComponent from '../components/SeeSiteComponent'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state={
            projects: PROJECTS
        }
    }
    componentDidMount() {
        document.title = `${this.props.project.name}`;
      }
    render(){
        
        const project = this.props.project
        const projects = this.state.projects

        let nextProject
        if(project.id === projects.length-1){
            nextProject = projects[0]
        }
        else{
            nextProject = projects[project.id+1]
        }
        let mainInfo
        if(!project.special){
            mainInfo = <NonIllustrationComponent project= {project}></NonIllustrationComponent>
        }
        else{
            mainInfo = <IllustrationComponent project = {project}></IllustrationComponent>
        }
        
    return(
        <Fragment>
            {project.external &&
            <SeeSiteComponent project = {project}></SeeSiteComponent>
    }
        <Container fluid >
            <Header color = {'black'}/>
                    <Container>
                    <div className = "spacer"/>
                    <Row>
                        <div className = "order-lg-2 col-lg-8 offset-lg-1">
                        <h1 style={{paddingBottom:"2rem"}}>{project.name} <img className = "inlineImg" src={project.icon} alt="an icon associated with this project"/></h1>
                        </div>
                        <div className="col-lg-3" style={{paddingTop:"1rem"}}>
                        <h4>{project.company}</h4>
                        <p>{project.tags}</p>
                        </div>
                    </Row>
                    <div className = "spacer"/>
                    </Container> 
        </Container> 
        {mainInfo}
        <Container>
        <div className = "spacer"></div>
            <Row>
                <Col className = "offset-md-8 col-md-4">
                    <NavLink to={`${nextProject.url}`}>
                        <h3 style= {{paddingTop: "1rem", paddingBottom: "1rem"}}>{nextProject.name} ></h3>
                    </NavLink>
                </Col>
            </Row> 
            <div className = "spacer"></div>        
            
            </Container>
        </Fragment>
    )
    }
}

export default Project;

