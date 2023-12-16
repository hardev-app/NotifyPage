import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/terms">Terminos y Condiciones</Link>
      </li>
      <li>
        <Link to="/privacy">Política de Privacidad</Link>
      </li>
      </ul>
    </div>  
  )
};

export default Navbar;