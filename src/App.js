import React from 'react';
import "./index.css"

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Education from "./Component/Education/Education";

const App = () => {
    return (
        <div className="foundationBackgroundColor">
            <BrowserRouter>
                <Header/>

                <Routes>
                    <Route path="/" element={<> <Hero/> <Education/></>}/>
                </Routes>

                <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;