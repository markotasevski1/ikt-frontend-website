import axios from '../../api/axios';
import { useEffect, useState , useContext} from 'react';
import { useAuthToken } from '../../context/AuthProvider';
const COURSES_URL = '/courses';

export function GetCourses() {
  const [courses, setCourses] = useState([]);
  const {authToken} = useContext(useAuthToken)
  console.log(authToken)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Set the request headers with the bearer token
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };

        // Make the API request with the headers
        const response = await axios.get(COURSES_URL, { headers });
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  });

  return (
    <div>
      {courses.map((course) => (
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
  );
}
