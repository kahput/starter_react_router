
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Vans from "./pages/vans";
import VansDetail from "./pages/vans/detail";
import Layout from "./components/Layout";
import Dashboard from "./pages/host/Dashboard";
import Reviews from "./pages/host/Reviews";
import Income from "./pages/host/Income";
import HostLayout from "./pages/host/Layout";

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
                    </Route>
                </Route>
            </Routes>
        </Router >
    )
}

export default App;
