import React from 'react';
import "./index.css"

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./Component/STATIC/Footer/Footer";
import Header from "./Component/STATIC/Header/Header";
import Hero from "./Component/Hero/Hero";

const App = () => {
    return (
        <div className="foundationBackgroundColor">
            <BrowserRouter>
                <Header/>

                <Routes>
                    <Route path="/" element={<Hero/>}/>
                </Routes>

                <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;