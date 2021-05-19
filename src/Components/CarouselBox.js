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
                <Carousel.Caption>
                    <h3>Forest image</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ keyboardsImg }
                alt="keyboards"
                />
                <Carousel.Caption>
                    <h3>jgchfcjhbyfyj</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ coderImg }
                alt="Coder"
                />
                <Carousel.Caption>
                    <h3>sr.gnnljsr g</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        )
    }
}