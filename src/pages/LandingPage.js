import {Container, Row, Col} from "react-bootstrap";
import {Link, useMatch, useNavigate, useResolvedPath} from "react-router-dom";
import '../style/LandingPageStyle.scss';
import {useEffect} from "react";

function LandingPage() {
    const authTokenSession = sessionStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if (authTokenSession != null) {
            navigate("/home");
        }
    }, [authTokenSession]);

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xl={5} lg={5} md={5} className="leftLogin">
                        <div className="centerLeftLogin">
                            <div className="logoLogin">
                                <img src={require('../media/login/LernDeutsch (2).png')}/>
                            </div>
                            <div className="leftText">
                                <p>Easy, Fun and Effective Learn German Online</p>
                            </div>
                            <div>

                                {/* <button>Sign in</button>
                                <button>Register</button> */}
                                <CustomLink to="/login">Sign in</CustomLink>
                                <CustomLink to="/register">Register</CustomLink>
                            </div>
                        </div>
                    </Col>
                    <Col xl={7} lg={7} md={7} className="rightLogin">
                        <img
                            src={require('../media/login/—Pngtree—boy character computer learning illustration_6406919.png')}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <Link to={to} {...props}>
            <button className={isActive ? "active" : ""}>
                {children}
            </button>
        </Link>

    )
}

export default LandingPage;
