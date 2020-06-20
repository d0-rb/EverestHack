import React from 'react'
import './dashboard.css'

class CalendarContainer extends React.Component {
    constructor(props) {
        super(props)
    }  

    render() {
        return (
            <div className= "calendar-item-container">
                    <div className= "calendar-recipes-div">
                        <p className= "calendar-item-day">{this.props.word[0]}<br />{this.props.word[1]}<br />{this.props.word[2]}</p>
                        {this.props.children}
                    </div>
            </div>
        )
    }
}

export default CalendarContainer;
