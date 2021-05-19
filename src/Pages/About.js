
import React, { Component } from "react"
import { Nav, Row, Col,Button,Container,Tab } from 'react-bootstrap'
import bussinesImg from '../assets/bussines.jpg';
import businessoneImg from '../assets/businessone.jpg';




export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src={bussinesImg}></img>
                                    <p>se;gljaerjkbgljaerno;ghoaerngpjaerourthl;antoiyaeoupthl;kangilhaou uiaeotyaoytoa</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <img src={bussinesImg}></img>
                                    <p>se;gljaerjkbgljaerno;ghoaerngpjaerourthl;antoiyaeoupthl;kangilhaou uiaeotyaoytoa</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <img src={bussinesImg}></img>
                                    <p>se;gljaerjkbgljaerno;ghoaerngpjaerourthl;antoiyaeoupthl;kangilhaou uiaeotyaoytoa</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <img src={businessoneImg}></img>
                                    <p>se;gljaerjkbgljaerno;ghoaerngpjaerourthl;antoiyaeoupthl;kangilhaou uiaeotyaoytoa</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                <img src={bussinesImg}></img>
                                    <p>se;gljaerjkbgljaerno;ghoaerngpjaerourthl;antoiyaeoupthl;kangilhaou uiaeotyaoytoa</p>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}