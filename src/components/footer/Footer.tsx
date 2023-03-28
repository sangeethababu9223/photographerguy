import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer__container container--max-1400">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <div className="footer__copyright">
                @copyRight 2023 by Sangeetha
            </div>
        </div>
    )   
}
export default Footer;