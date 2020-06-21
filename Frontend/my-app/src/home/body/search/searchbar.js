import React from 'react'
import Switch from '@material-ui/core/Switch';
import './search.css'
import { withStyles } from '@material-ui/core';


const PurpleSwitch = withStyles({
    root: {
        width: 60,
        height: 43,
        marginBottom: 12,
    },
    switchBase: {
      color: '#6F52ED',
      '&$checked': {
        color: '#6F52ED',
      },
      '&$checked + $track': {
        backgroundColor: '#6F52ED',
      },
    },
    checked: {},
    track: {
        borderRadius: 20,
        backgroundColor: '#6F52ED',        
    },
    thumb: {
        width: 24,
        height: 24
    }

})(Switch);

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }  
    
    handleChange = () => {
        this.props.onSwitchToggle()
    }

    render() {
        return (
            <div className= "search-bar-base">
                <div className= "search-bar-main">
                    <div className= "icon-text-container">
                        <p className= "material-icons search-icon">search</p>
                        <input placeholder= "Search..." className= "search-text"></input>
                    </div>
                    <div className= "separator-line dark"></div>
                </div>
                <div>
                    <p  className= "material-icons half-dark">menu_book</p>
                    <PurpleSwitch checked={this.props.checked} onChange= {this.handleChange} name= "bodyToggle"/>
                    <p className= "material-icons half-dark">group</p>
                </div>
            </div>
        )
    }
}

export default SearchBar;
