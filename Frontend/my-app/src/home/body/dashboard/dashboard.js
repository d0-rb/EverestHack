import React from 'react'
import CalendarContainer from './calendarcontainer'
import './dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }  

    render() {
        return (
            <div className= "main-dashboard-div">
                <h1 className= "main-dashboard-title">Dashboard</h1>
                <div className= "separator-line"></div>
                <div className= "calendar-container-div">
                
                <CalendarContainer word= "SUN"></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer word= "MON"></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer word="TUE"></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer word= "WED"></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer word= "THU"></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer word="FRI"></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer word="SAT"></CalendarContainer>

                </div>
            </div>
        )
    }
}

export default Dashboard;
