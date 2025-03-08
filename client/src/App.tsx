import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/home";

import About from "./pages/about";

import Vans from "./pages/vans";
import VansDetail from "./pages/vans/detail";

import HostLayout from "./pages/host/Layout";
import Dashboard from "./pages/host"
import Reviews from "./pages/host/Reviews";
import Income from "./pages/host/Income";
import HostVans from "./pages/host/HostVans";
import HostVanLayout from "./pages/host/HostVanLayout";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />

                    <Route path="vans" element={<Vans />}></Route>
                    <Route path="vans/:id" element={<VansDetail />}></Route>

                    <Route path="host" element={<HostLayout />} >
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVanLayout />}>
                            <Route index element={<HostVanInfo />} />
                            <Route path="pricing" element={<HostVanPricing />} />
                            <Route path="photos" element={<HostVanPhotos />} />

                        </Route>
                    </Route>
                </Route>
            </Routes>
        </Router >
    )
}

export default App;
