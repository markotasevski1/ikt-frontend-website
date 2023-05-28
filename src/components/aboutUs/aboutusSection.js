import {Container, Row, Col } from "react-bootstrap";
import "../../style/AboutUs.scss"

export default function AboutUsSection(){
    return(
        <Container fluid className="aboutUs">
            <Row className="aboutUsSectionContentWrapperStyling">
                <Col xl={6} lg={6} md={6} className="media">
                    <img src={require("../../media/aboutUs/—Pngtree—e-learning illustration of lecturer_6579796.png")} alt={'Example of a lecturer'}/>
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
    );
};
