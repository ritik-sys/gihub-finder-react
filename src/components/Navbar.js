import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar bg-success text-light">
            <span class="navbar-brand mb-0 h1"><i class="fab fa-github mr-2"></i>Github Finder</span>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/about" class="nav-link text-light">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
