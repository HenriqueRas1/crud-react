import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom' 

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-home"></i> Start
            </Link>
            <Link to="/user">
                <i className="fa fa-users"></i> Users
            </Link>
        </nav>
    </aside>