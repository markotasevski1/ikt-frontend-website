import 'bootstrap/dist/css/bootstrap.min.css';  
import NavigationMenu from './components/navigationMenu/navigationMenu'
import LandingPage from './components/login/landingPage'
import Signin from './components/login/signin'
import Register from './components/login/register'
import AboutUs from './components/aboutUs/aboutus';
import HomePage from './components/homePage/homePage';
import {Levels} from './components/levels/Levels';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "../src/style/AppStyle.scss"

export function App()
{
return(
  <div>
    
    <Container fluid className='appStyle'>
      <Routes>
        <Route exact path='/home' element={<HomePage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/levels' element={<Levels/>}/>
        <Route path='/materials' element={<></>}/>
        <Route path='/profile' element={<></>}/>
        <Route path='/index' element={<LandingPage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Container>
    {/* <LandingPage></LandingPage> */}
    {/* <Signin></Signin> */}
    {/* <Register></Register> */}
    {/* <AboutUs></AboutUs> */}
  </div>
)
}