/*import { Link } from "react-router-dom, react-scroll"*/
import { Link } from "react-scroll"

const Header = () => {
    return (
            <header className="flex-container">
                <nav className="navbar">
                    <ul className="navbar-links">
                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="/" smooth={true} duration={500}>Hem</Link></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="/" smooth={true} duration={500}>Kontakt</Link></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="Education" smooth={true} duration={500}>Utbildning</Link></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="/" smooth={true} duration={500}>Kompetens</Link></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="/" smooth={true} duration={500}>Arbetslivserfarenhet</Link></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="/" smooth={true} duration={500}>Om denna sida</Link></li>

                        <li className="navbar-links-item"><Link className="btn-nav" activeClass="active" to="/" smooth={true} duration={500}>Footer</Link></li>
                    </ul>
                </nav>
            </header>

    )
}


export default Header