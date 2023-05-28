import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import '../../style/NavigationMenuStyle.scss'

export function NavItems() {
    const logoutFunction = () => {
        sessionStorage.removeItem('token');
    }

    return (
        <div className="navItems">
            <ul>
                <CustomLink to="/home">Home Page</CustomLink>
                <CustomLink to="/aboutUs">About Us</CustomLink>
                <CustomLink to="/Levels">Levels</CustomLink>
                <CustomLink to="/Materials">Materials</CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
                <CustomLink to="/tutors">Tutors</CustomLink>
                <CustomLink to="/question">Questions</CustomLink>
                <CustomLink onClick={logoutFunction} to="/">Log out</CustomLink>
            </ul>
            <img src={require('../../media/homePage/hamburger_menu.png')} alt={'menu'}/>
        </div>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
