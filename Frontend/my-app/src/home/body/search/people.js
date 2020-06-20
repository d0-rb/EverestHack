import React from 'react'
import './search.css'

function PeopleItem(props) {
    return (
        <div className= "people-item">
            <p className= "people-item-name">{props.name}</p>
        </div>
    )
}

export default PeopleItem;