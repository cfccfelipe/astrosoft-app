import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className="Navbar nav justify-content-end">
            <li className="nav-item nav-link active c-ponter">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item nav-link active c-ponter">

                <Link to="/dashboard">dashboard</Link>

            </li>
            <li className="nav-item nav-link active c-ponter">

                <Link to="/">Home</Link>

            </li>
            <li className="nav-item nav-link disable">

                <Link to="/dashboard">dashboard</Link>

            </li>
        </ul>
    )
}

export default Navbar
