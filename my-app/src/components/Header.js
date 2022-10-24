import { Link } from "react-scroll"
import { Link as ClickLink } from "react-router-dom"

const Header = () => {
    return (
            
                <nav className="flex-container">
                    <ul className="navbar-links">
                        <li className="navbar-links-item"><ClickLink to="/">Hem</ClickLink></li>

                        <li className="navbar-links-item"><ClickLink to="/contact">Kontakt</ClickLink></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="Education" smooth={true} duration={500}>Utbildning</Link></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="/" smooth={true} duration={500}>Kompetens</Link></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="/" smooth={true} duration={500}>Arbetslivserfarenhet</Link></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="/" smooth={true} duration={500}>Om denna sida</Link></li>

                
                    </ul>
                </nav>
        

    )
}


export default Header