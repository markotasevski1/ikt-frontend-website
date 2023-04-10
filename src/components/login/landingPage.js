import { Button, Container, Row, Col } from "react-bootstrap";
import "../../style/LandingPageStyle.scss";

function LandingPage(){
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col xl={5} lg={5} md={5} className="leftLogin">  
                        <div className="centerLeftLogin">
                            <div className="logoLogin">
                                <img src={require('../../media/login/LernDeutsch (2).png')} />
                            </div>
                            <div>
                                <p>Easy, Fun and Effective Learn German Online</p>
                            </div>
                            <div>
                                <button>Sign in</button>
                                <button>Register</button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={7} lg={7} md={7} className="rightLogin">
                        <img src={require('../../media/login/—Pngtree—boy character computer learning illustration_6406919.png')}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;