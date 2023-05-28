import {Button} from 'react-bootstrap';
import {useLocation} from "react-router-dom";

export function ScoreCard() {
    const {state} = useLocation();
    const correctAnswers = state.correctlyAnswered.reduce((count, val) => (val ? count + 1 : count), 0);

    return (
        <div className='scoreCard'>
            <div className='text1'>
                <div>Congratulations!</div>
                <div>You completed the test!</div>
                <div>You
                    answered {correctAnswers}/{state.correctlyAnswered.length} questions correctly.
                </div>
                {/* func za score */}
            </div>
            <div>BEST LEVEL FOR YOU IS LEVEL {correctAnswers}!</div>
            {/* func za level */}
            <Button href='/levels'>Go to Levels</Button>
        </div>
    );
}
