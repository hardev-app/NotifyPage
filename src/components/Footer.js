import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-div">
                <p className="copyright">© {new Date().getFullYear()} Hardev App. All rights reserved.</p>
            </div>
        </footer>
    )
};
  
export default Footer;