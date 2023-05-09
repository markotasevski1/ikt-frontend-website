import { Card } from "react-bootstrap";
import RegisterHeader from "../components/register/RegisterHeader";
import RegisterForm from "../components/register/RegisterForm";
import RegisterFormFooter from "../components/register/RegisterFormFooter";
import "../style/RegisterStyle.scss"

export default function Register ()
{
    return(
        <Card className="registerPageStyling">
            <Card.Body className="registerCardStyling">
                <RegisterHeader />
                <RegisterForm />
                <RegisterFormFooter/>
            </Card.Body>
        </Card>
    )
}