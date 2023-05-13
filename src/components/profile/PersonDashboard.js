import { ProfileCard } from './ProfileCard';
import '../../style/Profile.scss'
import NavigationMenu from '../navigationMenu/navigationMenu';

export function PersonDashboard()
{
    return(
        <div className='dashboard' >
            <ProfileCard/>
        </div>
        
    )
}