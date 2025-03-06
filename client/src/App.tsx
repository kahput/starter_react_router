import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Vans from "./pages/vans";
import VansDetail from "./pages/vans-detail";

function App() {
    return (
        <Router>
            <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />}></Route>
                <Route path="/vans/:id" element={<VansDetail />}></Route>
            </Routes>
        </Router>
    )
}

export default App;
