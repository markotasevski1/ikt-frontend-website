import axios from '../../api/axios'
import { useEffect, useState } from 'react'

const COURSES_URL = '/courses'

export function GetCourses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get(COURSES_URL)
      .then((response) => {
        setCourses(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
    {courses.map(course => (
      <div key={course.id}>
        <h3>Course Name: {course.name}</h3>
        <p>Level: {course.level}</p>
        <p>Length: {course.length}</p>
        <p>Price: {course.price}</p>
        <p>Tutor ID: {course.tutorId}</p>
        <hr />
      </div>
    ))}
  </div>

  )
}
