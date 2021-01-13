import {React} from 'react';
import { Link } from 'react-router-dom';

function SeeSite(props){
    console.log(props.project.external)
return(
    <div className = "floating-div" style={{background:`${props.project.color}`}}>
        <Link to={{pathname: `https://${props.project.external}`}} target="_blank"><h5>See Live</h5></Link>
    </div>
)
}
export default SeeSite;