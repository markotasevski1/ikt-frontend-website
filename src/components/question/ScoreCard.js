import {Button} from 'react-bootstrap';
import {useLocation, useNavigate} from "react-router-dom";

export function ScoreCard() {
    const {state} = useLocation();
    const correctAnswers = state.correctlyAnswered.reduce((count, val) => (val ? count + 1 : count), 0);
    const score = (correctAnswers / state.correctlyAnswered.length) * 100;
    const navigate = useNavigate();

    const getCertificate = () => {
        navigate('/certificate', {state: {courseName: state.courseName, score}});
    }

    return (
        <div className='scoreCard'>
            <div className='text1'>
                <div>Congratulations!</div>
                <div>You completed the test!</div>
                <div>You
                    answered {correctAnswers}/{state.correctlyAnswered.length} questions correctly.
                </div>
            </div>
            <div>BEST LEVEL FOR YOU IS LEVEL {correctAnswers === 0 ? 1 : correctAnswers}!</div>
            {
                state.courseName == null || score < 50 ?
                    <Button href='/levels'>Go to Levels</Button> :
                    <Button onClick={getCertificate}>Get Certificate</Button>
            }
        </div>
    );
}
