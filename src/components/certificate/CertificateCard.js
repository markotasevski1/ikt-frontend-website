import {Row, Col, Container, Button} from "react-bootstrap";
import "../../style/Certificate.scss"
import {useReactToPrint} from "react-to-print";
import {useRef} from "react";
import {useLocation} from "react-router-dom";


export function CertificateCard() {
    const certificate = useRef();
    const generate = useReactToPrint({
        content: () => certificate.current,
        documentTitle: 'LernDeutsch Certificate',
        onAfterPrint: () => alert('Saved successfully'),
    });
    const { state } = useLocation();

    return (
        <div>
            <Container className="certificateCard" ref={certificate}>
                <Row>
                    <Col md={3} lg={3} className="sideSection">
                        <img src={require("../../media/navigationMenu/LernDeutsch (2).png")} alt={'logo'}/>
                    </Col>
                    <Col className="cardContent">
                        <h2>CERTIFICATE OF COMPLETION</h2>
                        <p>Score of: {state.score.toFixed(2)}%</p>
                        <p>This certificate of completion is awarded to</p>
                        <p style={{fontWeight: "bold"}}>TEAM 8</p>
                        <p>in recognition of having successfully completed the online course lesson</p>
                        <h2 >"{state.courseName}"</h2>
                    </Col>
                </Row>
            </Container>
            <div className="footer">
                <Button onClick={generate}>Download</Button>
            </div>
        </div>

    );
}
