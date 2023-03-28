import { Link } from "react-router-dom";
import './Header.scss';
import logo from '../../assets/images/logo.png';
import Navigation from "../navigation/Navigation";
function Header() {
    return (
        <div className="header__container container--max-1400">
            <Link className="header__logo-link" to='/'>
                <img className="header__logo-image" src={logo} alt="Photographer Guy Logo" />
            </Link>
            <Navigation />
        </div>
    )
}
export default Header;