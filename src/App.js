import React from 'react';
import "./index.css"

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Skill from "./Component/Skill/Skill";
import Education from "./Component/Education/Education";
import Work from "./Component/Work/Work";
import Project from "./Component/Project/Project";
import Interest from "./Component/Interest/Interest";
import Error404 from "./Component/Error404/Error404";

const App = () => {
    return (
        <div className="foundationBackgroundColor">
            <BrowserRouter>
                {/*<Header/>*/}

                <Routes>
                    <Route path="/" element={<><Skill/><Education/><Work/><Project/><Interest/></>}/>
                    <Route path="/404" element={<Error404/>}/>
                </Routes>

                {/*<Footer/>*/}
            </BrowserRouter>
        </div>
    );
}
export default App;