import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox'
import Carousel from 'react-bootstrap/Carousel';
import { Container, CardDeck, Card, Button } from 'react-bootstrap'
import teamImg from '../assets/team.jpg';
import coderrrImg from '../assets/coderrr.jpg';
import CodingImg from '../assets/Coding.jpg';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container className="text-center"> 
                    <h2 className="text-center m-4">Our Team</h2>
                    <CardDeck className="m-4" >
                        <Card style={{}}>
                            <Card.Img variant="top"
                                src={teamImg}/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem lkshglnelkmlkaglntlk
                                    </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{}}>

                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem lkshglnelkmlkaglntlk
                                    </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img variant="top"
                                src={coderrrImg} />
                        </Card>
                        <Card style={{}}>
                            <Card.Img variant="top"
                                src={CodingImg} />
                            <Card.Body>
                                <Card.Title >Developers</Card.Title>
                                <Card.Text>
                                    Lorem lkshglnelkmlkaglntlk
                                    </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}