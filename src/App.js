import NavigationMenu from './components/navigationMenu/navigationMenu'
import LandingPage from './components/login/landingPage'
import Signin from './components/login/signin'
import Register from './components/login/register'

import 'bootstrap/dist/css/bootstrap.min.css';  
export function App()
{
return(
  <div>
    {/* <NavigationMenu></NavigationMenu>
    <h1>икт проект</h1> */}
    <LandingPage></LandingPage>
    {/* <Signin></Signin> */}
    {/* <Register></Register> */}
  </div>
)
}