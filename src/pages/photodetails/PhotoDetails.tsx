import { useParams } from "react-router-dom";

function PhotoDetails() {
    const { id } = useParams();
    return (
        <div>
            <div>Test</div>
            <div>{id}</div>
        </div>
    )
}

export default PhotoDetails;