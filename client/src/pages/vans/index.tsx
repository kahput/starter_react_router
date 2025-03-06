import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Van { id: string, name: string, price: number, description: string, imageUrl: string, type: string }

function Vans() {
    const [vans, setVans] = useState<Array<Van> | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000/vans").then((res) => res.json())
            .then((data) => {
                setVans(data);
            });
    }, [])

    const vanElements = vans?.map(van => (
        <Link to={`/vans/${van.id}`} key={van.id} className="van-tile"
            aria-label={`View details for ${van.name}, priced at ${van.price} per day`}>
            <img src={van.imageUrl} alt={`Image of ${van.name}`} />
            <div className="van-info">
                <h2>{van.name}</h2>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans;
