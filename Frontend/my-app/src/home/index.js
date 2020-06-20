import React from 'react'
import NavBar from './navbar/navbar.js'
import BodyMain from './body'
import './index.css'


class HomeBase extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="main-background-div">
                <NavBar />
                <BodyMain />
            </div>
        )
    }
}

export default HomeBase;
