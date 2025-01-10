import {React, useEffect} from 'react'
import { Fragment } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import Accordion from './AccordionComponent'
import {ReactComponent as Rainbow} from '../assets/rainbow.svg'
import {ReactComponent as FlowerDrop} from '../assets/flower-drop.svg'
import Header from './HeaderComponent';
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from "react-router-dom";

let Hangel = "https://images.ctfassets.net/4hhd3ng2fxzv/59XLeKjKskOaSI1Ar30Mij/ead55ae60e97cae2192e17738115ee06/Hangel.jpg"


const DoAnimation = () => {
    //maybe it's not being called on the ones that are the same on the previous page bc it's already "been called previously" 
    //do I need to reset the timeline?
    //shouldn't be manipulating DOM directly
    //maybe - set className to divs, change className with setState -> 2nd setState
    // let tl = new gsap.timeline()
    // const sections = Array.from(document.querySelectorAll("section"))
    // sections.forEach(sec=>{
    //     tl = gsap.timeline(
    //         {
    //             paused: true, 
    //         }
    //     ).to(sec.querySelector(".img-container"), 0, {css:{visibility:"visible"}})
    //     .to(sec.querySelector(".black-container"), 1.4, {height:"0%", ease:Power2.easeInOut})
    //     .from(sec.querySelector(".image-moving"), 1.4, {scale:1.4, ease:Power2.easeInOut, delay:-1.6})
    //     ScrollTrigger.create({
    //     animation:tl,
    //     trigger:sec,
    //     start:"top bottom",
    const sections = gsap.utils.toArray('.reveal-after')
    sections.forEach((reveal)=>{
        const anim = gsap.fromTo(reveal, {
            top:"0"}, {duration: .3, top:"100%"});
        ScrollTrigger.create({
            trigger: reveal,
            animation: anim
        })
    })   
}

function Home(props){
    const { pathname } = useLocation();
    useEffect(()=>{
            DoAnimation()
        }, [pathname]);   
        return(
            <Fragment>
                <Container fluid>
                    <Header/>
                <Container>
                    <div className = "spacer"/>
              
                    <Row>
                    <Col>
                            <h1 className="center">
                            Experiences that enchant <Rainbow className = "inlineImg"/>. I run on pups and plants <span><img className = "inlineImg" src ={Hangel} alt="a white Jindo dog sniffing a flower"/></span>, books and
                            Stardew Valley<FlowerDrop className = "inlineImg"/>
                            </h1>
                        </Col>
                    </Row>
            
                <Row>
                    <Col>
                    <h5 className="center">designer • illustrator • coder</h5>
                    </Col>
                </Row>
              
                <div className = "spacer"/>
                </Container>
                <Accordion/>
                <Container>
                <div className = "spacer"/>
                <Row>
                    <Col>
                    <h4 style={{paddingBottom: "2rem"}}>Social</h4>
                    <a target = "blank" href = "https://assets.ctfassets.net/4hhd3ng2fxzv/4Xrh5kEUzHZZM8b9eizbLS/523602916ffbcc74a0eb4ad7c081fbc0/AliciaMacCara-Resume-2025.pdf">Resumé</a><br/>
                    <a target = "blank" href = "https://www.linkedin.com/in/aliciamariemaccara/">LinkedIn</a><br/>
                    <a target = "blank" href = "https://www.instagram.com/alimariemakes">Instagram</a>
                    
                    </Col>
                </Row>
                <div className = "spacer"/>
                </Container>
                </Container>
            </Fragment>
        )
    }

export default Home;
