import brandmark from "../assets/brandmark-2.svg"

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header>
            <Link to="/">
                <img id="header-brandmark" src={brandmark} alt="Brandmark" />
            </Link>
            <nav>
                <Link className={props.section === 'home' ? 'active' : ''} to="/">Home</Link>
                <Link className={props.section === 'projects' ? 'active' : ''} to="/projects">Projects</Link>
                <Link className={props.section === 'contact' ? 'active' : ''} to="/contact">Contact</Link>
            </nav>
        </header>
    )
}