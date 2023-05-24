import { Card, Button } from 'react-bootstrap'
import '../../style/Material.scss'

export default function Material({ courseCounter }) {
  return (
    <div className="materialComponent">
      <h2 style={{ color: '#1C1C83' }}>Course {courseCounter}</h2>
      <Card className="materialCardStyling">
        <Card.Body>
          <Card.Text className="materialCardElementStyling">
            Course name:{' '}
          </Card.Text>
          <Card.Text className="materialCardElementStyling">
            Card level:
          </Card.Text>
          <Card.Text className="materialCardElementStyling">
            Card length:
          </Card.Text>
          <Card.Text className="materialCardElementStyling">
            Card price:
          </Card.Text>
          <Card.Text className="materialCardElementStyling">
            Card tutorId:
          </Card.Text>
          <Button className="materialCardButtonStyling" href="#">
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
