import { NavLink } from "react-router-dom";

function Header() {
    const activeLinkStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    };

    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink style={({ isActive }) => isActive ? activeLinkStyle : undefined} to="host">Host</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeLinkStyle : undefined} to="about">About</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeLinkStyle : undefined} to="vans">Vans</NavLink>
            </nav>
        </header>
    )
}

export default Header;
