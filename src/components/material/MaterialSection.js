import Material from './Material'
import axios from '../../api/axios'
import { useState, useEffect } from 'react'
const COURSES_URL = '/courses/courses-by-levels'

export function MaterialSection({levelId}) {
  const [courses, setCourses] = useState([])
  const authTokenSession = sessionStorage.getItem('token')

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${authTokenSession}`,
        }

        const response = await axios.get(COURSES_URL, { headers })
        if(levelId != null) {
          setCourses(response.data[levelId]);
        } else {
          const coursesLists =  new Map(Object.entries(response.data)).values();
          let data = [];
          let item = coursesLists.next();
          while(item.value != null) {
            data = data.concat(item.value);
            item = coursesLists.next();
          }
          console.log(data);
          setCourses(data);
        }
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCourses();
  }, [])

  return (
    <div className="materialComponents">
      {courses.map((course) => (
        <Material
          key={course.courseId}
          // finalLessonId={course.finalQuizId}
          courseId={course.courseId}
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
