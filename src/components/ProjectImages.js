import {React} from 'react';
import {Row, Col} from 'react-bootstrap'

export function Left1Right2(props){
    
    return(
        
        <>
            <Row>
                <Col className = "col-12 col-md-6 p-0">
                <section>
                    <div className="black-container"></div>
                    <div className = "img-container pb-3">
                        <img className = "image-moving img-responsive" src = {props.img1.src} style = {{width:"100%"}} alt={props.img1.alt}/>
                    </div>
                    </section>
                </Col>  
                <Col className = "col-12 col-md-6 p-0">
                <section>
                    <div className="black-container" ></div>
                    <div className = "img-container pl-md-3 pb-3" >
                        <img className = "image-moving img-responsive" src = {props.img2.src} style = {{width:"100%"}} alt={props.img2.alt}/>
                    </div>
                    </section>
                    <section>
                    <div className="black-container"></div>
                    <div className = "img-container pl-md-3" >
                        <img className = "image-moving img-responsive" src = {props.img3.src} style = {{width:"100%"}} alt={props.img3.alt}/>
                    </div>
                    </section>
                </Col>  
            </Row>
        </>
    )
}

export function DoubleImage(props){
    
    return(
        
        <>
            <Row>
                <Col className = "col-12 col-md-6 p-0">
                <section>
                    <div className="black-container"></div>
                    <div className = "img-container pr-md-2 pb-3">
                        <img className = "image-moving img-responsive" src = {props.img1.src} alt={props.img1.alt} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
                <Col className = "col-12 col-md-6 p-0">
                <section>
                    <div className="black-container"></div>
                    <div className = "img-container pl-md-2">
                        <img className = "image-moving img-responsive" src = {props.img2.src} alt={props.img2.alt} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
            </Row>
        </>
    )
}

export function OneOffsetImg(props){
    
    return(
        
        <>
            <Row>
                <Col className = "col-12 offset-md-4 col-md-8">
                <section>
                    <div className="black-container"></div>
                    <div className = "img-container pr-md-2 pb-3">
                        <img className = "image-moving img-responsive" src = {props.image.src} alt={props.image.alt} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
            </Row>
        </>
    )
}


export function FullOne(props){
    
    return(
        
        <>
            <Row>
                <Col className = "col-12 p-0">
                <section>
                    <div className="black-container"></div>
                    <div className = "img-container pb-3">
                        <img className = "image-moving img-responsive" src = {props.image.src} alt={props.image.alt} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
                </Row>
        </>
    )
}

