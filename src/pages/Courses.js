import { GetCourses } from "../components/Courses/GetCourses";
import NavigationMenu from "../components/navigationMenu/navigationMenu";
function CoursesPage()
{
    return (
        <div>
            <NavigationMenu/>
           <GetCourses/>
        </div>
    );
}
export default CoursesPage;