import { useLocation, Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import pages from '../utils/pages';
import logoImage from './assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { pathname } = useLocation();
    return (
        <header>
            <nav className="container grid nav-bar">
                <Link className="nav-bar-logo" to={pages.get('home').path}>
                    <img src={logoImage} alt="Little Lemon logo" />
                </Link>
                <button
                    className="nav-bar-hamburger"
                    type="button"
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                >
                    {isNavExpanded ?
                        <FontAwesomeIcon icon={faXmark} size="2x" /> :
                        <FontAwesomeIcon icon={faBars} size="2x" />}
                </button>
                <ul  className={`nav-bar-links ${isNavExpanded ? "expanded" : ""}`}>
                    {navLinks.map((page) => (
                        <li key={page.name}>
                            <Link
                                to={page.path}
                                className={pathname === page.path ? 'current-location' : ''}
                                onClick={() => setIsNavExpanded(false)}
                            >
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header