import axios from '../../api/axios'
import { useState, useEffect } from 'react'

const COURSES_URL = '/courses'

export function GetCourses() {
  const [courses, setCourses] = useState([])
  const authTokenSession = sessionStorage.getItem('token')

  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${authTokenSession}`,
        }
  
        const response = await axios.get(COURSES_URL, { headers })
        setCourses(response.data)
   
      } catch (error) {
        console.error(error)
      }
    }
  
    fetchCourses()
  }, []) // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div>CoursesPage</div>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>Course Name: {course.name}</h3>
          <p>Level: {course.courseId}</p>
          <p>Length: {course.level}</p>
          <p>Price: {course.length}</p>
          <p>Tutor ID: {course.price}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
