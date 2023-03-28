import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Photos from "../pages/photos/Photos";
import PhotoDetails from "../pages/photodetails/PhotoDetails";

function RouterModule() {
    return (
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/photos/:id" element={<PhotoDetails />} />
        </Routes>
    )
}

export default RouterModule;