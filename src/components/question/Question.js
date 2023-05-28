import {QuestionCard} from "./QuestionCard";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../api/axios";

const LEVEL_DETERMINATION_URL = 'quizes/level-determination';
// const LEVEL_DETERMINATION_URL = 'quizes/level-determination';

export default function Question() {
    const {state} = useLocation();
    const [quiz, setQuiz] = useState([]);
    const authTokenSession = sessionStorage.getItem('token');
    let lessonId = null;
    if (state != null) {
        lessonId = state.lessonId;
    }

    useEffect(() => {
        async function fetchQuiz() {
            try {
                const headers = {
                    Authorization: `Bearer ${authTokenSession}`,
                }

                const response = await axios.get(LEVEL_DETERMINATION_URL, {headers});
                setQuiz(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchQuiz();
    }, [quiz, setQuiz]);

    if (quiz.length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <div style={{background: "#79CCD2", height: "100vh"}}>
            <QuestionCard questions={quiz.questions}/>
        </div>
    );
}
