import React from 'react'
import Course from './Course'

const CoursesList = (props) => (
    <div>
        <ul>
            {
                props.courses.map(course => (
                    <Course
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        teacher={course.teacher}
                        date={course.date}
                    />       
                ))
            }
        </ul>
    </div>
)

export default CoursesList