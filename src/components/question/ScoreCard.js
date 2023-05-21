import {Button} from 'react-bootstrap';

export function ScoreCard(){
    return(
        <div className='scoreCard'>
            <div className='text1'>
                <div>Congratulations!</div>
                <div>You completed the test!</div>
                <div>Your score is:</div>
                <div>55/100</div> {/* func za score */}
            </div>
            <div>BEST LEVEL FOR YOU IS LEVEL 2!</div> {/* func za level */}
            <Button href='/levels'>Go to Levels</Button>
        </div>
    );
}