import React from 'react'
import { Auth } from 'aws-amplify';
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    signOut = async () => {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    render() {
        return (
            <div className= "navbar-base-div">
                <div className= "home-icon-div">
                    <img className= "logo" src="https://cdn.discordapp.com/attachments/721912029899784214/724260575403573318/CloveIconWhite.png"></img>
                </div>
                <div onClick={this.signOut}>
                    <img className= "sign-out" src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-10-1/1024/logout10-512.png"></img>
                </div> 
            </div>
        )
    }
}

export default NavBar;
