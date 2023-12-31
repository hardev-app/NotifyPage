import { Link } from "react-router-dom"
import PathConstants from "../routes/pathConstants";
import "../styles/Header.css"

const Header = () => {  
    return (
        <header>
            <div className="header-div">
                <h1 className="title"><Link to={PathConstants.HOME}>Home</Link></h1>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to={PathConstants.PRIVACY}>Política de Privacidad</Link></li>
                        <li className="nav-item"><Link to={PathConstants.TERMS}>Términos y Condiciones</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};
  
export default Header;