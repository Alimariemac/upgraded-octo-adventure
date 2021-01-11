import {React} from 'react';
import {Container} from 'react-bootstrap'
import Gallery from 'react-photo-gallery';
import Fade from 'react-reveal/Fade';

function ShowIllustrations(props){
    console.log(props)
return(
    <Container>
        <Fade>
            <Gallery photos={props.project.images} direction={"column"}/>
        </Fade>
    </Container>
)
}

export default ShowIllustrations;