import { NavLink as NavLink, Outlet } from "react-router-dom";

function HostLayout() {
    const activeStyle = {
        color: "#161616",
        textDecoration: "underline",
        fontWeight: 600,
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink end style={({ isActive }) => isActive ? activeStyle : undefined} to=".">Dashboard</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="income">Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="reviews">Reviews</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="vans">Vans</NavLink>
            </nav>
            <div className="host-content">
                <Outlet />
            </div>
        </>
    )
}

export default HostLayout;
