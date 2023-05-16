import {Row, Col, Container, Button } from "react-bootstrap";
import "../../style/Certificate.scss"
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";


export function CertificateCard(){

    const certificate = useRef();
    const generate = useReactToPrint({
        content: () => certificate.current,
        documentTitle: 'LernDeutsch Certificate',
        onAfterPrint: () => alert('Saved successfully'),
        
    });

    return(
        <div>
            <Container className="certificateCard" ref={certificate}>
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
            <div className="footer">
                <Button onClick={generate}>Download</Button>
            </div>
        </div>
        
    );
}