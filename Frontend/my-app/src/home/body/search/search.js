import React from 'react'
import SearchBar from './searchbar'
import Results from './results'
import './search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }  

    handleToggleSwitch = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return (
            <div className= "main-search-div">
                <SearchBar onSwitchToggle={this.handleToggleSwitch}/>
                <Results displayPeople={this.state.checked}/>
            </div>
        )
    }
}

export default Search;
