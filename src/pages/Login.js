import { Card } from "react-bootstrap";
import { LoginForm } from "../components/login/LoginForm";
import { LoginFormFooter } from "../components/login/LoginFormFooter";
import { LoginHeader } from "../components/login/LoginHeader";
const loginPageStyling = {
    border:'2px solid black',
    width:'300px',
    height:'300px',
}
const loginCardStyle = {
    border:'2px solid black',
    width:'150px',
    height:'150px',
}
function Login(){
    return(
        <Card style={loginPageStyling}>
        <Card.Body style={loginCardStyle}>
                     <LoginHeader/>
                     <LoginForm/>
                     <LoginFormFooter/>
        </Card.Body>
        </Card>
    )
}
export default Login;