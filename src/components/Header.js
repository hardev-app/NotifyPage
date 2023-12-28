import { NavLink } from "react-router-dom"
import "../styles/Header.css"
import PathConstants from "../routes/pathConstants";

const Header = () => {  
    return (
        <header>
            <div className="header-div">
                <h1 className="title"><NavLink to={PathConstants.HOME}>Home</NavLink></h1>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><NavLink to={PathConstants.PRIVACY}>Política de Privacidad</NavLink></li>
                        <li className="nav-item"><NavLink to={PathConstants.TERMS}>Términos y Condiciones</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};
  
export default Header;