import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

//pages
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import User from "./components/pages/User";

function App() {
    return (
        <BrowserRouter>
            <div className="MainApp">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/User/:id" element={<User />} />
                    <Route path="/News" element={<News />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
