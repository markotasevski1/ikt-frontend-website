import {Card} from 'react-bootstrap';

export function ProfileCard(){
    return(
        <Card className='profileCard'>
            <Card.Body>
                <Card.Text className="profileInfo">Name:</Card.Text>
                <Card.Text className="profileInfo">Last Name:</Card.Text>
                <Card.Text className="profileInfo">Username:</Card.Text>
                <Card.Text className="profileInfo">Payment:</Card.Text>
            </Card.Body>
        </Card>
    )   
}