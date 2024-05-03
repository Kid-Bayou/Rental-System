import {Link, NavLink} from "react-router-dom"
import logo from "../../assets/logo.png"

function Header() {
    return (
        <>
            <header className="main-header">
                <Link className="logo" to="/">
                    <img src={logo} className="logo" />
                    <p className="logo-name">Rental System</p>
                </Link>
                <nav className="nav">
                    <NavLink to="/about">
                        Saved
                    </NavLink>

                    <NavLink to="/login">
                        Login
                    </NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header