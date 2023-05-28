import {QuestionCard} from "./QuestionCard";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../api/axios";

const LEVEL_DETERMINATION_URL = 'quizes/level-determination';

export default function Question() {
    let url = LEVEL_DETERMINATION_URL;
    const {state} = useLocation();
    const [quiz, setQuiz] = useState([]);
    const authTokenSession = sessionStorage.getItem('token');

    if (state != null) {
        if (state.lessonId != null) {
            url = ''
        } else if (state.courseId != null) {
            url = 'courses/' + state.courseId + '/final-quiz';
        }
    }

    useEffect(() => {
        async function fetchQuiz() {
            try {
                const headers = {
                    Authorization: `Bearer ${authTokenSession}`,
                }

                const response = await axios.get(url, {headers});
                setQuiz(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchQuiz();
    }, [url, authTokenSession]);

    if (quiz.length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <div style={{background: "#79CCD2", height: "100vh"}}>
            <QuestionCard questions={quiz.questions} courseName={state?.courseName}/>
        </div>
    );
}
