import { useVan } from "./HostVanLayout";

function HostVanInfo() {
    const { van } = useVan();

    return (
        <>
            <p><span>Name:</span> {van?.name}</p>
            <p><span>Category:</span> {van?.type}</p>
            <p><span>Description:</span> {van?.description}</p>
            <p><span>Visibility:</span> public</p>

        </>
    )
}

export default HostVanInfo;
