import {Card, Button} from "react-bootstrap";
import "../../style/Question.scss"
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

export function QuestionCard(){
    const[num]=useState(4);
    const [active, setActive] = useState(1);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(100/(num)*active);
    }, [num, active]);

    const [buttonValue, setButtonValue] = useState("Next");
    const navigate = useNavigate();
    function score(){
        console.log(active);
        console.log(num)
        if(active>=num){
            console.log("finish");
            navigate('/score');
        }
    };
    return(
        <div>
            <div className='barContainer'>
                <div className="progress">
                    <div className="progress-bar" style={{width:width+"%"}} role="progressbar" aria-valuenow={width} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='numQuestion'>
                    Question {active}
                </div>
            </div>
            <Card className="questionCard">
            <Card.Body>
                <Card.Title className="question">Wo können Sie mit dem Ticket reisen?</Card.Title>
                <Button className="btn answer">In Deutschland und im Ausland.</Button>
                <Button className="btn answer">Nur in Deutschland.</Button>
                <Button className="btn answer">Nur in Ihrer Nähe.</Button>
                <Button className="btn prev" disabled={active==1?true:false} onClick={()=>{active<=0?setActive(0):setActive(active-1); active<=num?setButtonValue("Next"):setButtonValue("Finish")}}>Prev</Button>
                <Button className="btn next" onClick={()=>{active>=num?setActive(num):setActive(active+1); active>=num-1?setButtonValue("Finish"):setButtonValue("Next"); score(active, num)}}>{buttonValue}</Button>
            </Card.Body>
        </Card>
        </div>
        
    );
}