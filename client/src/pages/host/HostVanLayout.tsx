import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useOutletContext, useParams } from "react-router-dom";

interface Van { id: string, name: string, price: number, description: string, imageUrl: string, type: string }
type ContextType = { van: Van | null };

function HostVanLayout() {
    const params = useParams();
    const [van, setVan] = useState<Van | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/vans/${params.id}`).then((res) => res.json())
            .then((data) => {
                setVan(data[0])
            })
    }, [params])

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#000"
    };

    return (
        <div className="host-van-detail-container">
            <Link to=".." relative="path">Back to all vans</Link>
            <div className="host-van-detail">
                <div>
                    <img src={van?.imageUrl} alt="" />
                    <div className="host-van-overview">
                        <i className={`van-type ${van?.type} selected`}>{van?.type}</i>
                        <h2>{van?.name}</h2>
                        <p><span>$60</span>/day</p>
                    </div>
                </div>
                <nav>
                    <NavLink end style={({ isActive }) => isActive ? activeStyle : undefined} to={""}>Details</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to={"pricing"}>Pricing</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to={"photos"}>Photos</NavLink>
                </nav>
                <Outlet context={{ van } satisfies ContextType} />
            </div>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useVan(): ContextType {
    return useOutletContext<ContextType>();
}

export default HostVanLayout;
