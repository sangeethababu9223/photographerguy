import React from "react";
import { Link } from "react-router-dom";
import './Navigation.scss';
function Navigation() {
    
    return (
        <ul className="navigation__container">
            <li className="navigation__item">
                <Link  className="navigation__link" to="/">Home</Link>
            </li>
            <li>
                <Link to="/photos">Photos</Link>
            </li>
        </ul>
    )
}
export default Navigation;