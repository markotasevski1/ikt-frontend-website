import {Card, Button} from 'react-bootstrap'
import '../../style/Levels.scss'
import {levelsData} from '../../data/LevelsData'
import {useNavigate} from "react-router-dom";

export function Level() {
    const navigate = useNavigate();

    const handleRedirect = (id) => {
        navigate('/Materials', {state: {levelId: id}});
    }

    return (
        <div className='LevelComponentWrapperStyling'>
            {levelsData.map((data, key) => {
                return (
                    <div className="levelComponent" key={key}>
                        <h1 style={{color: '#7FCCAC'}}>Level {data.id}</h1>
                        <Card className="levelCardStyling">
                            <Card.Body>
                                <Card.Title className="levelCardTitleStyling">
                                    {data.title}
                                </Card.Title>
                                <Card.Text className="levelCardElementStyling">
                                    {data.text}
                                </Card.Text>
                                <Card.Text className="levelCardElementStyling">
                                    {data.text2}
                                </Card.Text>
                                <Button className="levelCardButtonStyling" onClick={() => handleRedirect(data.id)}>Learn
                                    more</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}
