import {Link, NavLink} from "react-router-dom"
import logo from "../../assets/logo.png"

function Header() {
    return (
        <>
            <header className="header">
                <Link className="logo-container" to="/">
                    <img src={logo} className="logo" />
                    <p className="logo-name">Rental System</p>
                </Link>
                <nav className="nav">
                    <NavLink to="/">
                        My Home
                    </NavLink>

                    <NavLink to="/">
                        Saved
                    </NavLink>

                    <NavLink to="/signin">
                        Sign In
                    </NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header