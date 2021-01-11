import { React, Component }  from 'react';
import {Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';

class Header extends Component{
    render(props){
        return(
            <Nav className="header">
                <DarkModeToggle className ="navbar-brand"/>
                    <NavLink className="nav-link nav-item mr-auto ml-auto"  style={{margin:"auto"}} to="/home">
                    <h5 className="nav-item nav-link">Alicia MacCara</h5>
                    </NavLink> 
            </Nav>
           
        )
    }
}
export default Header;