import { Card, Button } from 'react-bootstrap'
import '../../style/Levels.scss'
import { levelsData } from '../../data/LevelsData'
import { useEffect } from 'react'
import axios from '../../api/axios'
const LEVELS_URL = '/courses/courses-by-levels'
export function Level() {
  const authTokenSession = sessionStorage.getItem('token')
  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${authTokenSession}`,
        }
        const response = await axios.get(LEVELS_URL, { headers })
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLevels()
  }, [])
  return (
    <div>
      {levelsData.map((data, key) => {
        return (
          <div className="levelComponent" key={key}>
            <h1 style={{ color: '#7FCCAC' }}>Level {data.id}</h1>
            <Card className="levelCardStyling">
              <Card.Body>
                <Card.Title className="levelCardTitleStyling">
                  {data.title}
                </Card.Title>
                <Card.Text className="levelCardElementStyling">
                  {data.text}
                </Card.Text>
                <Card.Text className="levelCardElementStyling">
                  {data.text2}
                </Card.Text>
                <Button className="levelCardButtonStyling">Learn more</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
