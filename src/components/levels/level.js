export function Level({levelCounter})
{
    return (
    <div className="level">
        <div>
            <h1>Level {levelCounter}</h1>
        </div>
        <div className="cardLevel">
            <h3>What you'll learn</h3>
            <p>
            By studying German Level 3, you will be able 
            to understand authentic passages on familiar 
            issues and communicate on a variety of subjects using accurate 
            pronunciation and intonation and a range of language and structure.
            </p>
            <p>Also you will be able to read and summarize a limited number of authentic texts,
                 be able to write more complex texts on familiar issues 
                and have further developed intercultural competence.
            </p>
            <button>Learn more</button>
        </div>
    </div>
    )
}