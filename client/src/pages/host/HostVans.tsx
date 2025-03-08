import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Van { id: string, name: string, price: number, description: string, imageUrl: string, type: string }

function HostVans() {
    const [vans, setVans] = useState<Array<Van> | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000/vans").then((res) => res.json())
            .then((data) => {
                setVans(data);
            });
    }, [])

    const vanElements = vans?.map(van => (
        <Link to={`${van.id}`} key={van.id} className="host-van-card"
            aria-label={`View details for ${van.name}, priced at ${van.price} per day`}>
            <img className="host-van-image" src={van.imageUrl} alt={`Image of ${van.name}`} />
            <div>
                <h2>{van.name}</h2>
                <p>${van.price}<span>/day</span></p>
            </div>
        </Link>
    ))


    return (
        <div className="host-list-container">
            <h1>Your listed vans</h1>
            <div className="host-list">
                {vanElements}
            </div>
        </div>
    )
}

export default HostVans;
