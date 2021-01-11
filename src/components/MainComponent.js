import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import { PROJECTS } from '../shared/projects';
import Project from './Project'

class Main extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            projects:PROJECTS
        };
    }

    
render(){
        const ProjectWithId = ({match}) => {
            return (
                <Project
                project={this.state.projects.filter(project => project.id === +match.params.projectId)[0]}
            />     
            );
        };  

    return(
        <>
           <Switch>
               <Route path='/home' component = {Home}/>
               <Route path='/:projectId' component={ProjectWithId} />
               <Redirect to='/home' />
           </Switch>
           </>
    )
}
    
}
export default Main;