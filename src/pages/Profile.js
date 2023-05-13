import { PersonDashboard } from "../components/profile/PersonDashboard"
import NavigationMenu from "../components/navigationMenu/navigationMenu"

export default function Profile()
{
    return (
        <div style={{height: window.innerHeight}}> 
            <NavigationMenu/>
            <PersonDashboard/>
        </div>
    )
}