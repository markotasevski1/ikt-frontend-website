import {Card, Button} from "react-bootstrap";
import "../../style/Question.scss"
export function QuestionCard(){
    return(
        <Card className="questionCard">
            <Card.Body>
                <Card.Title className="question">Wo können Sie mit dem Ticket reisen?</Card.Title>
                <Button className="btn answer">In Deutschland und im Ausland.</Button>
                <Button className="btn answer">Nur in Deutschland.</Button>
                <Button className="btn answer">Nur in Ihrer Nähe.</Button>
                <Button className="btn next">Next</Button>
            </Card.Body>
        </Card>
    );
}