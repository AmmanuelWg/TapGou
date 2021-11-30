import React from 'react'
import
{
    Routes,
    BrowserRouter as Router,
    Route,
    Navigate
} from "react-router-dom"

//MY FILES
import Home from "../Home/LandingPage/Intro"
import Price from "../Home/Price/index"
import WhyUs from "../Home/WhyUs/index"
import Works from "../Home/Works/index"
import Nav from "../Home/Nav/index"
import Land from "../Home/index"

import LogIn from "./Access/LogIn"
import SignUp from "./Access/SignUp"



function DeskRoutes()
{
    return (
        <Router>
            <Routes>
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/" element={<Nav />} >
                    <Route path="Home" element={<Land />} />
                    <Route path="Price" element={<Price />} />
                    <Route path="WhyUs" element={<WhyUs />} />
                    <Route path="Works" element={<Works />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default DeskRoutes

