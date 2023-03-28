import { Component } from "react";
import './Photos.scss';
import { photoObj } from "../../types/Type";
import Photo from "../../components/photo/Photo";

type photoState = {
    photos: Array<photoObj>;
}
class Photos extends Component<{}, photoState>{
    state: photoState = {
        photos: [
            {
                link: "../images/slider1.jpeg",
                text: 'Caption for the image'
            },
            {
                link: "../images/slider2.jpg",
                text: 'Caption for the image 2'
            },
            {
                link: "../images/slider3.jpg",
                text: 'Caption for the image 3'
            },
            {
                link: "../images/slider4.jpg",
                text: 'Caption for the image 4'
            },
            {
                link: "../images/slider5.jpg",
                text: 'Caption for the image 5'
            },
            {
                link: "../images/slider1.jpeg",
                text: 'Caption for the image 6'
            },
            {
                link: "../images/slider2.jpg",
                text: 'Caption for the image 7'
            },
            {
                link: "../images/slider3.jpg",
                text: 'Caption for the image 8'
            },
        ]
    };
    render() {
        return (
            <div className="photos__container">
                {
                    this.state.photos.map((photo, index) =>
                        <Photo key={index} photo={photo}></Photo>
                    )
                }
            </div>
        )
    }
}

export default Photos;