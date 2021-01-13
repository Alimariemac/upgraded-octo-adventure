import {React} from 'react';
import {Container} from 'react-bootstrap'
import Gallery from 'react-photo-gallery';

function ShowIllustrations(props){
    console.log(props)
return(
    <Container>
            <Gallery photos={props.project.images} direction={"column"}/>
    </Container>
)
}

export default ShowIllustrations;