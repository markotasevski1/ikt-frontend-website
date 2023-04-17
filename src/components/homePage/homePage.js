import CheckKnowledge from "./checkKnowledge";
import { Container, Row, Col } from "react-bootstrap";
import NavigationMenu from "../navigationMenu/navigationMenu";
function homePage(){
    return(
        <div>
            <NavigationMenu></NavigationMenu>
            <CheckKnowledge/>
            <Container fluid className="HomePage">
                <Row>
                    <Col className="header">
                        <h1>Fun fact</h1>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={9}>
                        <div className="containerHomePage">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat commodo nunc eu mattis. Quisque et pulvinar erat. 
                                Mauris pellentesque consequat nibh pulvinar tincidunt. Sed posuere consectetur purus id tincidunt. Etiam scelerisque auctor viverra. 
                                Mauris vitae lobortis ante. Proin at nulla felis. Nulla dictum nulla eros, vitae malesuada dui hendrerit nec. Pellentesque at turpis
                                sed urna egestas aliquam. Donec pretium ex ligula, a cursus est dictum sed.
                            </p>
                            <p>
                                Cras lobortis lectus ligula, eu molestie arcu laoreet at. In hac habitasse platea dictumst. Integer malesuada quis sem vel laoreet. Quisque
                                vel magna ut sapien volutpat mollis et eu ipsum. Curabitur sit amet pulvinar dolor. Sed laoreet eu erat at dignissim. Nullam lacinia a nisi
                                a egestas. Cras et lorem laoreet, ornare risus ut, varius erat. Nam malesuada ligula vitae consectetur malesuada.
                            </p>
                            <p>
                                Proin non venenatis magna, vel placerat tellus. Pellentesque rutrum eros quam, sed rhoncus orci elementum at. Phasellus vestibulum mauris nulla,
                                sit amet bibendum velit congue in. Curabitur iaculis, lectus et luctus dapibus, mi felis iaculis quam, pellentesque dictum sem est sed nisi.
                                Donec laoreet neque non est placerat tristique. Nam risus lorem, accumsan et consectetur at, auctor vitae risus. Proin vestibulum elit ac suscipit
                                condimentum. Etiam rhoncus a libero ac porttitor. Pellentesque consequat metus vel eros dapibus, eu suscipit purus suscipit. Vestibulum sollicitudin
                                    scelerisque nisi, a pulvinar enim tincidunt vel. Sed at lorem sed lorem aliquam volutpat. Donec leo lectus, ullamcorper vitae magna non, efficitur
                                    porttitor mauris. Maecenas quam eros, efficitur nec fringilla a, cursus nec turpis.
                            </p>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col className="footer"></Col>
                </Row>
            </Container>
        </div>
    );
}

export default homePage;