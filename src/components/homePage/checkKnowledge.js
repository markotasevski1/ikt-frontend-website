import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../style/HomePage.scss";

function CheckKnowledge() {
  const navigate = useNavigate();

  const handleCheckKnowledge = () => {
    navigate("/question");
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="imgCheckKnowlegde">
            <img src={require("../../media/homePage/AboutUsPageArt_Artboard-1.png")} alt="Image" />
          </Col>
          <Col lg={5} className="containerCheckKnowledge">
            <div className="activateTest">
              <p>
                Hi, Welcome to the platform LernDeutsch where you can learn or upgrade your skills.
                The platform offers you numerous lectures, quizzes, and practical work. We will even provide
                you with a certificate at the end. So what are you waiting for? Check your knowledge with this
                quick and easy test and start with the suitable level for you today!
              </p>
              <button onClick={handleCheckKnowledge}>Check your knowledge</button>
            </div>
          </Col>
          <Col className="imgCheckKnowlegde">
            <img src={require("../../media/homePage/AboutUsPageArt_Artboard-1.png")} alt="Image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CheckKnowledge;
