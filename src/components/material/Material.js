import {Card, Button} from 'react-bootstrap'
import '../../style/Material.scss'
import {useNavigate} from 'react-router-dom'

export default function Material({
                                     courseId,
                                     name,
                                     level,
                                     length,
                                     price,
                                     tutor,
                                     students,
                                     lessons,
                                 }) {
    const navigate = useNavigate();

    const handlePayment = () => {
        navigate('/CheckoutPage', {state: {courseId}});
    }
    const viewLessons = () => {
        navigate('/lesson')
    }

    const viewFinalExam = () => {
        navigate('/question', {state: {courseId, courseName: name}});
    }

    return (
        <div className="materialComponent">
            <h2 style={{color: '#1C1C83'}}>{name}</h2>
            <Card className="materialCardStyling">
                <Card.Body>
                    <Card.Text className="materialCardElementStyling">
                        Course name: {name}
                    </Card.Text>
                    <Card.Text className="materialCardElementStyling">
                        Course level: {level}
                    </Card.Text>
                    <Card.Text className="materialCardElementStyling">
                        Card length: {length}
                    </Card.Text>
                    <Card.Text className="materialCardElementStyling">
                        Buy course price: {price}$
                    </Card.Text>
                    {/*<Card.Text className="materialCardElementStyling">*/}
                    {/*    Course tutor tutor id: {tutor}*/}
                    {/*</Card.Text>*/}
                    <Button className="materialCardButtonStyling" onClick={handlePayment}>
                        Buy
                    </Button>
                    <Button className="materialCardButtonStyling" onClick={viewLessons}>
                        View Lessons
                    </Button>
                    <Button className="materialCardButtonStyling" onClick={viewFinalExam}>
                        Take final exam!
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
