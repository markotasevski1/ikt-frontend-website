import Material from "./Material";
import axios from '../../api/axios'
import { useState, useEffect } from 'react'
const COURSES_URL = '/courses'

export function MaterialSection(){

    const [courses, setCourses] = useState([])
    const authTokenSession = sessionStorage.getItem('token')
    console.log(authTokenSession)
    
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
    }, []) // Empty dependency array ensures the effect runs only once

    const materialComponents = [];
// for(let i=0; i<courses.length; i++)
// {
//     materialComponents.push(<Material key={i} courses={i}/>);
// }
    for (let i=1; i<5; i++){
        materialComponents.push(<Material key={i} courseCounter={i}/>);
    }

    return(
        <div className="materialComponents">{materialComponents}</div>
    )
}