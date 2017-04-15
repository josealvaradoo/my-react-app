// Dependencies
import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

// Styles
require('react-datepicker/dist/react-datepicker.css')

// Component
export default class Date extends Component
{
    constructor(...props) {
        super(...props)
        this.state = {
            startDate: moment()
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({ startDate: date })
    }

    render() {
        return(
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        )
    }
}