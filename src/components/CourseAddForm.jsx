// Dependencies
import React from 'react'
import uid from 'uid'
import Date from './Date'
//import DatePicker from 'react-datepicker'

// Styles
//require('react-datepicker/dist/react-datepicker.css')

// Component
const CourseAddForm = props => (
    <form onSubmit={props.onAddCourse}>
        <input placeholder="Nombre del curso" name="name" />
        <input placeholder="Profesor" name="teacher" />
        <Date />
        <input type="hidden" name="id" value={uid(10)} />
        <input type="submit" value="Guardar" />
    </form>
)

// Export Component
export default CourseAddForm