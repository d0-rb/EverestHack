import React from 'react'
import SearchBar from './searchbar'
import Results from './results'
import './search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }  

    render() {
        return (
            <div className= "main-search-div">
                <SearchBar />
                <Results />
            </div>
        )
    }
}

export default Search;
