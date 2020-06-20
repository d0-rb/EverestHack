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
                        <p className= "calendar-item-day-num">{this.props.dayNum}</p>
                        <p className= "calendar-item-day">{this.props.day[0]}<br />{this.props.day[1]}<br />{this.props.day[2]}</p>
                        {this.props.children}
                    </div>
            </div>
        )
    }
}

export default CalendarContainer;
