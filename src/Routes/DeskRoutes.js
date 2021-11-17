import React from 'react'
import { Routes, BrowserRouter as Router, Route, Navigate } from "react-router-dom"



//MY FILES
import CheckInPage from "../Desk/Page/Check-In/index"
import SearchPage from "../Desk/Page/Search/index"
import ChartPage from "../Desk/Page/Chart/Index"
import ShiftLogPage from "../Desk/Page/ShiftLog/index"
import Layout from "../Desk/Layout/Layout"

function DeskRoutes()
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >

                    <Route path="CheckInPage" element={<CheckInPage />} />
                    <Route path="SearchPage" element={<SearchPage />} />
                    <Route path="ChartPage" element={<ChartPage />} />
                    <Route path="ShiftLogPage" element={<ShiftLogPage />} />

                </Route>


            </Routes>
        </Router>
    )
}

export default DeskRoutes
