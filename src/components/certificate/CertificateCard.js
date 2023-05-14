import {Row, Col, Container } from "react-bootstrap";
import "../../style/Certificate.scss"

export function CertificateCard(){

    return(
        <Container className="certificateCard">
            <Row>
                <Col md={3} lg={3} className="sideSection">
                    <img src={require("../../media/navigationMenu/LernDeutsch (2).png")}/>
                </Col>
                <Col className="cardContent">
                    <h2>CERTIFICATE OF COMPLETION</h2>
                    <p>This certificate of completion is awardet to</p>
                    <p style={{fontWeight: "bold"}}>TEAM 8</p>
                    <p>in recognition of having sucessfully completed the online course lession</p>
                </Col>
            </Row>
        </Container>
    );
}