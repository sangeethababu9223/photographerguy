import { photoObj } from "../../types/Type";
import './Photo.scss';
type propType = {
    photo :photoObj
}
function Photo(props: propType) {
    const { photo } = props;
    return (
            <div className="photo__item">
                <img src={photo.link} alt={photo.text} className="photo__image" />
                <h5 className="photo__caption">{photo.text}</h5>
            </div>
    );
}
export default Photo;