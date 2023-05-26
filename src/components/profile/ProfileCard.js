import { Card } from 'react-bootstrap'
import axios from '../../api/axios'
import { useEffect, useState } from 'react'
const USER_INFO_URL = '/users/get-user-details'
export function ProfileCard() {
  const authTokenSession = sessionStorage.getItem('token')
  const authUserName = sessionStorage.getItem('username')
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${authTokenSession}`,
        }
        const params = {
          userName: authUserName,
        }
        const response = await axios.get(USER_INFO_URL, { headers, params })
        setUserInfo(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUserInfo()
  }, [authTokenSession, authUserName])

  return (
    <Card className="profileCard">
    <Card.Body>
      <Card.Text className="profileInfo">Name: {userInfo?.firstName}</Card.Text>
      <Card.Text className="profileInfo">Last Name: {userInfo?.lastName}</Card.Text>
      <Card.Text className="profileInfo">Username: {userInfo?.userName}</Card.Text>
      <Card.Text className="profileInfo">Payment:{userInfo?.transaction}</Card.Text>
    </Card.Body>
  </Card>
  )
}
