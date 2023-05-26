import Material from './Material'
import axios from '../../api/axios'
import { useState, useEffect } from 'react'
const COURSES_URL = '/courses'

export function MaterialSection() {
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
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="materialComponents">
      {courses.map((course) => (
        <Material
          key={course.id}
          name={course.name}
          level={course.level}
          price={course.price}
          length={course.length}
          tutor={course.tutor.baseUserId}
        />
      ))}
    </div>
  )
}
