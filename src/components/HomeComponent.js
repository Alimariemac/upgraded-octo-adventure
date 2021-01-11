import React from 'react'
import { Fragment } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import Accordion from './AccordionComponent'
import {ReactComponent as Rainbow} from '../assets/rainbow.svg'
import {ReactComponent as FlowerDrop} from '../assets/flower-drop.svg'
import Header from './HeaderComponent';
import Fade from 'react-reveal/Fade';
let Hangel = "https://images.ctfassets.net/4hhd3ng2fxzv/59XLeKjKskOaSI1Ar30Mij/ead55ae60e97cae2192e17738115ee06/Hangel.jpg"

function Home(props){
        return(
            <Fragment>
                <Container fluid>
                    <Header/>
                <Container>
                    <div className = "spacer"/>
                <Fade>
                    <Row>
                    <Col>
                            <h1 className="center">
                            Experiences that enchant <Rainbow className = "inlineImg"/>. I run on pups and plants <span><img className = "inlineImg" src ={Hangel} alt="a white Jindo dog sniffing a flower"/></span>, books and
                            Stardew Valley<FlowerDrop className = "inlineImg"/>
                            </h1>
                        </Col>
                    </Row>
                </Fade>
                <div className = "spacer"/>
                <Fade>
                <Row>
                    <Col>
                    <h5 className="center">designer • illustrator • coder</h5>
                    </Col>
                </Row>
                </Fade>
                <div className = "spacer"/>
                <div className = "spacer"/>
                </Container>
                <Accordion/>
                <Container>
                <div className = "spacer"/>
                <Row>
                    <Col>
                    <h4 style={{paddingBottom: "2rem"}}>Social</h4>
                    <a target = "blank" href = "https://dribbble.com/Alimariemac">Dribbble</a><br/><br/>
                    <a target = "blank" href = "https://www.linkedin.com/in/aliciamariemaccara/">LinkedIn</a><br/><br/>
                    <a target = "blank" href = "https://www.instagram.com/alimariemac">Instagram</a>
                    </Col>
                </Row>
                <div className = "spacer"/>
                </Container>
                </Container>
            </Fragment>
        )
    }

export default Home;