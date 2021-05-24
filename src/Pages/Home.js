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
                    <h2 className="text-center m-4">У вас є проект? Давайте його обговоримо. Продумаємо. Зробимо. </h2>
                    <CardDeck className="m-4" >
                        <Card style={{}}>
                            <Card.Img variant="top"
                                src={teamImg}/>
                            <Card.Body>
                                <Card.Title>Відображення сайту в пошукових системах</Card.Title>
                                <Card.Text>
                                    Допомагаємо правильно підібрати хостинг та підтримувати його
                                    </Card.Text>
                                <Button variant="primary">Детальніше</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{}}>

                            <Card.Body>
                                <Card.Title>Адаптивність під всі пристої</Card.Title>
                                <Card.Text>
                                Розробка сайту у нас - це гарантія коректного його показу як на ПК, так і на всіх гаджетах сучасності!
                                    </Card.Text>
                                <Button variant="primary">Замовити дзвінок</Button>
                            </Card.Body>
                            <Card.Img variant="top"
                                src={coderrrImg} />
                        </Card>
                        <Card style={{}}>
                            <Card.Img variant="top"
                                src={CodingImg} />
                            <Card.Body>
                                <Card.Title >Аналіз сайту та його навігація </Card.Title>
                                <Card.Text>
                                Аналіз поточного сайту, дослідження ринку та аналіз конкурентів
                                    </Card.Text>
                                <Button variant="primary">Хочу сайт!</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}