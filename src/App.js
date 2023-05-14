import 'bootstrap/dist/css/bootstrap.min.css';  
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs';
import HomePage from './components/homePage/homePage';
import Levels from './pages/Levels';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "../src/style/AppStyle.scss"
import Profile from './pages/Profile';
import Materials from './pages/Materials'
import Certificate from './components/certificate/Certificate';
export function App()
{
return(
  <div>
    
    <Container fluid className='appStyle'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route exact path='/home' element={<HomePage/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/levels' element={<Levels/>}/>
        <Route path='/index' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
        <Route path='/materials' element={<Materials/>}/>
      </Routes>
    </Container>
  </div>
)
}