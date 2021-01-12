import {React, Fragment, useEffect} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import {Left1Right2, DoubleImage, OneOffsetImg, FullOne} from '../components/ProjectImages'
import {Power2, gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from "react-router-dom";

//page sections

function Top(props){
    return(
        <section>
        <div className="black-container pageMainImg" ></div>
            <div className = "img-container pageMainImg" style={{width:"100%", height:"70vh"}}>
                <img className = "image-moving" src = {props.project.fullImage} alt = {props.project.fullImage.alt} style={{objectFit:"cover", width:"100%", height:"100%"}}/>
            </div>
        </section>
    )
}
function TLDR(props){
    return(
        <Fragment>
            <h3>TL;DR</h3>
            <p>{props.project.tldr}</p>
        </Fragment>
    )
}

function Role(props){
    return(
        <Fragment>
            <h3>My Role</h3>
            <p>{props.project.role}</p>
        </Fragment>
    )
}

function Why(props){
    return(
        <Fragment>
            <h3>Why</h3>
            <p>{props.project.why}</p>
        </Fragment>
    )
}

function Research(props){
    return(
        <Fragment>
            <h3>Research</h3>
            <p>{props.project.research}</p>
        </Fragment>
    )
    
}

function Iterations(props){
    return(
        <Fragment>
            <h3>Iterations</h3>
            <p>{props.project.iterations}</p>
        </Fragment>
    )
    
}

function NextSteps(props){
    return(
        <Fragment>
            <h3>Learnings & Next Steps</h3>
            <p>{props.project.iterations}</p>
        </Fragment>
    )
}

const scrollTo = () => {
    document.querySelector("body").scrollTo(0,0)
}



function GetProject(props){
    // let imageReveal = CSSRulePlugin.getRule('.img-container:after')
    const { pathname } = useLocation();
    const project = props.project

    const colorSection = (project.numbers ? project.numbers.map(m=>{
            return(
            <Col key = {m.id} className="col-md-4">
            <h3 style = {{fontSize:"6rem", textAlign:"center"}}>{m.num}</h3>
            <p style={{textAlign:"center"}}>{m.text}</p>
            </Col>
            )
        }) : <Col><h3>{project.quote}</h3><p>-{project.attribution}</p></Col>)
        
        
        useEffect(()=>{
        //  promise1.then()?
        scrollTo()
        let tl = new gsap.timeline()
        const sections = Array.from(document.querySelectorAll("section"))
        sections.forEach(sec=>{
            tl = gsap.timeline(
                {
                    paused: true, 
                }
            ).to(sec.querySelector(".img-container"), 0, {css:{visibility:"visible"}})
            .to(sec.querySelector(".black-container"), 1.4, {height:"0%", ease:Power2.easeInOut})
            .from(sec.querySelector(".image-moving"), 1.4, {scale:1.4, ease:Power2.easeInOut, delay:-1.6})
            ScrollTrigger.create({
            animation:tl,
            trigger:sec,
            start:"top bottom",
    })
    }) 
        return () => {
            tl.kill()
        }
        // setTimeout(() => {
        //     doAnimation()
        // }, 1000);    
        }, [pathname]);   
   
        
return(
    <div>
        <Top project= {project}/> 
    <Container>
            <div className = "spacer"></div>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <TLDR project = {project}/>
                    </div>
            </Row>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <Role project = {project}/>
                </div>
            </Row>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <Why project = {project}/>
                </div>
            </Row>
            
             {project.id === 0 &&
            <>
                <FullOne image = {project.images[0]} />  
                <p className = "p-small">Old Foursquare site</p> 
                <DoubleImage img1 = {project.images[1]} img2= {project.images[2]} /> 
                <p className = "p-small">Old Factual and Placed sites</p> 
            </>
            }
            {project.id === 2 &&
            <>
                <FullOne image = {project.images[2]} />   
                <FullOne image = {project.images[3]} /> 
            </>
            }
            
    
{/* make img-container width = width of image (add width and height to images)??? 
</div> */}
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <Research project = {project}/>
                </div>
            </Row>

       {project.id === 0 &&
                 <Left1Right2 img1={project.images[3]} img2={project.images[4]} img3={project.images[5]}/>  
        }
        {project.id === 1 &&
                 <Left1Right2 img1={project.images[2]} img2={project.images[1]} img3={project.images[0]}/>  
        }
        {project.id === 3 &&
                 <FullOne image = {project.images[0]}/>  
        }
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <Iterations project = {project}/>
                </div>
            </Row>
            {project.id ===0 &&
            <>
             <DoubleImage img1={project.images[6]} img2={project.images[7]}/>
            <DoubleImage img1 = {project.images[9]} img2={project.images[8]}/>  
            <FullOne image = {project.images[10]} />
            </>
            }
            {project.id === 1 &&
                   <DoubleImage img1={project.images[3]} img2={project.images[4]}/>
                    }
                    {project.id === 2 &&
                <DoubleImage img1 = {project.images[0]} img2={project.images[1]}/>  
            }
            {project.id === 3 &&
                 <FullOne image = {project.images[1]} />  
            }
            
           
            </Container>

            <div className = "spacer"></div>
            <div className="stats" style= {{background:`${project.color}`}}>
                <Container>
                <Row>
                    {colorSection}
                </Row>
             
                </Container>     
                
            </div> 
            <div className= "spacer"></div> 
            <Container>
            {project.id === 1 &&
                   <OneOffsetImg image={project.images[5]}/>
                    }
            {project.id === 2 &&
                <OneOffsetImg image = {project.images[4]} />  
            }
        
            <Row>
            {project.id === 0 &&
                <FullOne image = {project.images[11]} />  
            }
                <div className = "col col-md-8 offset-md-4">
                <NextSteps project = {project}/>
                </div>
            </Row>
        </Container>
       </div>
)
}

export default GetProject;
