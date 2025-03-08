import { useVan } from "./HostVanLayout";

function HostVanPricing() {
    const { van } = useVan();

    return (
        <h3>${van?.price}/day</h3>
    )
}

export default HostVanPricing;
