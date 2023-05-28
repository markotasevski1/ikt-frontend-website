import "../../style/NavigationMenuStyle.scss";
import {NavItems} from "./NavItems";

function NavigationMenu(className) {

    return (
        <div className="navigationMenu">
            <div className="logoNavMenu">
                <img src={require("../../media/navigationMenu/LernDeutsch (2).png")}/>
            </div>
            <NavItems/>
        </div>
    );
}

export default NavigationMenu;
