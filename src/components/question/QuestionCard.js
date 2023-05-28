import {Card, Button} from "react-bootstrap";
import "../../style/Question.scss"
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

export function QuestionCard({questions}) {
    const [num] = useState(questions.length);
    const [active, setActive] = useState(1);
    const [width, setWidth] = useState(0);
    const [current, setCurrent] = useState(questions[0]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctlyAnswered, setCorrectlyAnswered] = useState([]);

    useEffect(() => {
        setWidth(100 / (num) * active);
    }, [num, active]);

    const [buttonValue, setButtonValue] = useState("Next");
    const navigate = useNavigate();

    function next() {
        const answrs = current.answers.filter(answer => answer.isCorrect).map(answer => answer.answerId);
        setCorrectlyAnswered([...correctlyAnswered, answrs.includes(selectedAnswer)]);
        setSelectedAnswer(null);

        if (active >= num) {
            navigate('/score', {state: {correctlyAnswered: [...correctlyAnswered, answrs.includes(selectedAnswer)]}});
        }

        setCurrent(questions[active]);
    }

    function prev() {
        console.log(questions[active - 1]);
        let tmp = correctlyAnswered.slice(0, -1);
        setCorrectlyAnswered(tmp);
        setSelectedAnswer(null);
        setCurrent(questions[active - 2]);
    }

    return (
        <div>
            <div className='barContainer'>
                <div className="progress">
                    <div className="progress-bar" style={{width: width + "%"}} role="progressbar" aria-valuenow={width}
                         aria-valuemin="0" aria-valuemax="100"/>
                </div>
                <div className='numQuestion'>
                    Question {active}
                </div>
            </div>
            <Card className="questionCard">
                <Card.Body>
                    <Card.Title className="question">{current.text}</Card.Title>
                    {current.answers.map(answer => (
                        <Button key={answer.answerId}
                                className={`btn answer ${selectedAnswer === answer.answerId ? 'btn-selected' : ''}`}
                                onClick={() => setSelectedAnswer(answer.answerId)}>{answer.text}</Button>
                    ))}
                    <Button className="btn prev" disabled={active === 1} onClick={() => {
                        active <= 0 ? setActive(1) : setActive(active - 1);
                        active <= num ? setButtonValue("Next") : setButtonValue("Finish");
                        prev();
                    }}>Prev</Button>
                    <Button className="btn next" onClick={() => {
                        active >= num ? setActive(num) : setActive(active + 1);
                        active >= num - 1 ? setButtonValue("Finish") : setButtonValue("Next");
                        next();
                    }} disabled={selectedAnswer == null}>{buttonValue}</Button>
                </Card.Body>
            </Card>
        </div>

    );
}
