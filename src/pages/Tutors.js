import { useState, useEffect } from 'react'
import '../style/Tutor.scss'
import axios from '../api/axios'
import NavigationMenu from '../components/navigationMenu/navigationMenu'

const TUTORS_URL = '/users/get-tutors'
export default function TutorsPage() {
  const authTokenSession = sessionStorage.getItem('token')
  const [tutors, setTutors] = useState([])
  useEffect(() => {
    const getTutors = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${authTokenSession}`,
        }
        const response = await axios.get(TUTORS_URL, { headers })
        setTutors(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getTutors()
  }, [])
  // for testing tutor id 5eb0cc82-ac92-445f-8a5c-08db57fb7184
  // user id 8052b986-c34b-4b98-bea8-87e532bd79cf
  return (
    <div>
      <NavigationMenu />
      <div>
        {tutors.map((tutor) => (
          <div className="tutor-styling">
            <h1>Tutor's name: {tutor.baseUser.firstName}</h1>
            <h2>Tutor's email: {tutor.baseUser.email}</h2>
            <h2>Tutor's email: {tutor.baseUser.email}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
