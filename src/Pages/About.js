
import React, { Component } from "react"
import { Nav, Row, Col,Button,Container,Tab } from 'react-bootstrap'
import bussinesImg from '../assets/bussines.jpg';
import businessoneImg from '../assets/businessone.jpg';
import frontendImg from '../assets/front-end-skills.png';
import frontendbackendblogImg from '../assets/front_end_back_end_blog.png';
import topfrontendframeworksImg from '../assets/top-front-end-frameworks.jpg';
import SitesImg from '../assets/Sites.jpg';




export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Дизайн</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Команда</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Програмування</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Фреймворки</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Сайти</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src={bussinesImg}></img>
                                    <h2>СТВОРИМО ЕФЕКТИВНИЙ САЙТ ДЛЯ ВАШИХ ПОТРЕБ</h2>
                                    <p>Сайт замовлений у нас — це готове дизайн-рішення, що спонукає відвідувачів до того, щоб залишити свої контакти.Ми розробляємо красиві магазини з усім необхідним функціоналом для швидкої покупки </p>
                                    <p>Наша ціль – зробити для вас сайт з унікальним дизайном, який буде максимально ефективно презентувати ваш продукт чи компанію й вигідно вирізнятиме вас серед конкурентів. Ми глибоко вникаємо у ваш проєкт та вивчаємо ваших клієнтів. Крім того, ми завжди на зв'язку в процесі роботи. Можна приїхати до нас в офіс на зустріч або вирішувати всі питання дистанційно.</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <img src={frontendImg}></img>
                                    <h2>Наша команда з професіоналів створить для Вас індивідуальний дизайн, спеціалісти розкажуть та пояснять як саме буде виконуватись проект та реалізують сайт Вашої мрії в життя!</h2>

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <img src={frontendbackendblogImg}></img>
                                <h2>Напишемо код і розпочнемо роботу з фреймворками, ви завжди будете вкурсі всіх подій щодо створення та написання сайту </h2>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <img src={topfrontendframeworksImg}></img>
                                    <h3>Використовуємо сучасні технології та рухаємось в ногу з часом. Для вас підберемо на якій саме платформі має бути написаний сайт</h3>

                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                <img src={SitesImg}></img>
                                    <h3>Підключимо бібліотеки та настроїмо все необхідне аби Ваш сайт працював та приносив користь не лише Вам, а й людям які будуть його переглядати</h3>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}