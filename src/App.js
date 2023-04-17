import 'bootstrap/dist/css/bootstrap.min.css';  
import NavigationMenu from './components/navigationMenu/navigationMenu'
import LandingPage from './components/login/landingPage'
import Signin from './components/login/signin'
import Register from './components/login/register'
import AboutUs from './components/aboutUs/aboutus';
import HomePage from './components/homePage/homePage';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export function App()
{
return(
  <div>
    <NavigationMenu></NavigationMenu>
    <Container fluid>
      <Routes>
        <Route exact path='/home' element={<HomePage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/levels' element={<></>}/>
        <Route path='/materials' element={<></>}/>
        <Route path='/profile' element={<></>}/>
      </Routes>
    </Container>
    {/* <LandingPage></LandingPage> */}
    {/* <Signin></Signin> */}
    {/* <Register></Register> */}
    {/* <AboutUs></AboutUs> */}
  </div>
)
}