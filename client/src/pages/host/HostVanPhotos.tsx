import { useVan } from "./HostVanLayout";

function HostVanPhotos() {
    const { van } = useVan();

    return (
        <img src={van?.imageUrl} />
    )
}

export default HostVanPhotos;
