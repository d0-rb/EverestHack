import React from 'react'
import './bodymain.css'
import Dashboard from './dashboard/dashboard.js'
import Search from './search/search.js'

function BodyMain() {  
    return (
        <div className= "main-body-div">
            <Search />
            <Dashboard />
        </div>
    )
}

export default BodyMain;
