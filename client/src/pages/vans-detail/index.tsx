import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface Van { id: string, name: string, price: number, description: string, imageUrl: string, type: string }

function VansDetail() {
    const params = useParams();
    const [van, setVan] = useState<Van | null>(null)

    useEffect(() => {
        fetch(`http://localhost:3000/vans/${params.id}`).then((res) => res.json())
            .then((data) => {

                setVan(data[0]);
            })
    }, [params.id])


    return (
        <div className="van-detail-container">
            <div className="van-detail">
                <img src={van?.imageUrl} />
                <div className="van-info">
                    <i className={`van-type van-type-${van?.type}`}>{van?.type}</i>
                    <h2>{van?.name}</h2>
                    <p className="van-price"><span>${van?.price}</span>/day</p>
                    <p>{van?.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            </div>
        </div>
    )
}

export default VansDetail;
