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
                <NavLink end style={({ isActive }) => isActive ? activeStyle : undefined} to="/host">Dashboard</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/host/income">Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout;
