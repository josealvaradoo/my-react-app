// Dependencies
import React, { Component, PropTypes } from 'react'
import uid from 'uid'
import { courses } from '../data/courses.json'
import CoursesList from './CoursesList'
import CourseAddForm from './CourseAddForm'

// Main Application
class App extends Component
{
    constructor(...props) {
        super(...props)
        this.state = {
            courses: []
        }
        
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.resetData = this.resetData.bind(this)
    }

    handleOnAddCourse(e) {
        e.preventDefault()
        
        let course = {
            id: e.target.id.value ? e.target.id.value : App.defaultProps.id,
            name: (e.target.name.value) ? e.target.name.value : App.defaultProps.name,
            teacher: (e.target.teacher.value) ? e.target.teacher.value : App.defaultProps.teacher,
            date: e.target[2].value ? e.target[2].value : App.defaulProps.date
        }

        this.setState({
            courses: this.state.courses.concat([course])
        })

        e.target.reset()
    }

    fetchData() {
        setTimeout(() => this.setState({ courses: courses}), 3000)
    }

    resetData() {
        this.setState({ courses: [] })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        if(!this.state.courses.length) {
            return(
                <div>
                    <p>No hay cursos</p>
                    <button type="button" onClick={this.fetchData}>Cargar cursos</button>
                </div>
            )
        } else {
            return(
                <div>
                    <CourseAddForm onAddCourse={this.handleOnAddCourse} />
                    <CoursesList courses={this.state.courses} />
                    <button onClick={this.resetData}>Borrar cursos</button>
                </div>
            )
        }
    }
}

App.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}
App.defaultProps = {
    id: uid(10),
    name: 'Curso desconocido',
    teacher: 'Profesor no asignado',
    date: 'Sin Fecha'
}

export default App