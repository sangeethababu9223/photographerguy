import './Slider.scss';
import Carousel from "react-bootstrap/Carousel";
function Slider() {
    return (
        <Carousel variant="dark" className="slider__container">
            <Carousel.Item className="slider__item">
                <img
                    className="slider__image"
                    src="../images/slider1.jpeg"
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Slider 1</h3>
                    <div>
                        Sample Slide 1
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider__item">
                <img
                    className="slider__image"
                    src="../images/slider2.jpg"
                    alt="Slider"
                />
                <Carousel.Caption>
                    <h3>Slider 2</h3>
                    <div>
                        Sample Slide 2
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider;