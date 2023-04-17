import { Button, Container, Row, Col } from "react-bootstrap";
import NavigationMenu from '../navigationMenu/navigationMenu'
import "../../style/AboutUs.scss"

function AboutUs(){
    return(
        <div className="aboutUs">
            <NavigationMenu></NavigationMenu>
            <Container fluid>
                <Row>
                    <Col xl={6} lg={6} md={6} className="media">
                        <div>
                            <img src={require("../../media/aboutUs/—Pngtree—e-learning illustration of lecturer_6579796.png")}/>
                        </div>
                        
                    </Col>
                    <Col xl={6} lg={6} md={6} className="content">
                        <div className="text">
                            <p>
                                At LernDeutsch, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, 
                                and discovery in people’s lives. We want to inspire and multiply the kind of creative exploration that furthers expression,
                                learning, and application.
                            </p>
                            <p>
                                LernDeutsch is an online learning community with classes for creative and curious people. On LernDeutsch, members come together 
                                to find inspiration and take the next step in their creative journey.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default AboutUs;