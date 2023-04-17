import { Container, Row, Col } from "react-bootstrap";
import "../../style/Levels.scss"
import NavigationMenu from "../navigationMenu/navigationMenu";

export function Levels(){
    return(
        <div >
            <NavigationMenu></NavigationMenu>
            <Container fluid className="levels">
                <Row>
                    <Col lg={4} md={6}>
                    <div className="level">
                        <div>
                            <h1>Level 1</h1>
                        </div>
                        <div className="cardLevel">
                            <h3>What you'll learn</h3>
                            <p>
                            In the A1 course students will learn essential vocabulary for daily 
                            communication purposes and will acquire fundamental grammar structures
                            in order to be able to communicate independently at a basic level. 
                            </p>
                            <p>The four main areas of interest i.e. speaking/listening/reading/writing
                                will be practiced alternately and supported by making use of different
                                media such as books, CDs, booklets, short films and simple newspaper articles.
                            </p>
                            <button>Learn more</button>
                        </div>
                    </div>
                    </Col>
                    <Col lg={4} md={6}>
                    <div className="level">
                        <div>
                            <h1>Level 2</h1>
                        </div>
                        <div className="cardLevel">
                            <h3>What you'll learn</h3>
                            <p>
                            During German level 2, you will learn how to read and write in German, to speak 
                            and to understand spoken German. Grammar and vocabulary are also an important part 
                            of the course.
                            </p>
                            <p>After the course, you will be able to talk about the weather, the weekend and your work.
                                 You will be able to give someone directions and accept or decline an invitation and hold 
                                 a simple telephone conversation.
                            </p>
                            <button>Learn more</button>
                        </div>
                    </div>
                    </Col>
                    <Col lg={4} md={6}>
                    <div className="level">
                        <div>
                            <h1>Level 3</h1>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};