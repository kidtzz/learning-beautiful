import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

//pages
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import User from "./components/pages/User";
import Album from "./components/pages/Album";
import Login from "./components/pages/Login";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="MainApp">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        {/* <Route path="/User/:id" element={<User />} /> */}
                        <Route exact path="/User/:id" component={User} />
                        <Route exact path="/News" element={<News />} />
                        <Route exact path="/Album" element={<Album />} />
                        <Route exact path="/Login" element={<Login />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
