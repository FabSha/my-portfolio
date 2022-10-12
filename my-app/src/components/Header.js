import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link className="links" to="/">Hem</Link></li>
                    
                    <li><Link className="links" to="/contact">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header