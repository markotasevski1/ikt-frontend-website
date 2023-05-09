import { Card } from "react-bootstrap";
import { LoginForm } from "../components/login/LoginForm";
import { LoginFormFooter } from "../components/login/LoginFormFooter";
import { LoginHeader } from "../components/login/LoginHeader";
import "../style/LoginPage.scss"

function Login() {
  return (
    <Card className="loginPageStyling">
      <Card.Body className="loginCardStyling">
        <LoginHeader />
        <LoginForm />
        <LoginFormFooter />
      </Card.Body>
    </Card>
  );
}
export default Login;
