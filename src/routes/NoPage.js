import { Link } from "react-router-dom"
import "../styles/Page404.css"

const Page404 = () => {
    return (
        <div className="page-404">
            <h1>Pagina no encontrada</h1>
            <p>La página que buscas no existe</p>
            <Link to="/" className={"back-to-home"}>Regresar a Home</Link>
        </div>
    )
};
  
export default Page404;