import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import programmingImg from '../assets/programming.jpg';
import keyboardsImg from '../assets/keyboards.jpg';
import coderImg from '../assets/coder.jpg';


export default class CarouselBox extends Component {
    render() {
        return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ programmingImg }
                alt="Programming"
                />
                <Carousel.Caption bg="black">
                    <h2>Створення сайтів під ключ</h2>
                    <h3>Наше основне завдання створити сайт який буде корисний для Вас та Вашого бізнесу</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ keyboardsImg }
                alt="keyboards"
                />
                <Carousel.Caption>
                    <h3>Створення та реалізація проекті</h3>
                    <p>Сучасні фреймворки, нові та додаткові наповнення</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ coderImg }
                alt="Coder"
                />
                <Carousel.Caption>
                    <h3>Пропис та деталізація кожного елемента </h3>
                    <p>Виконуємо різні види проектів </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        )
    }
}