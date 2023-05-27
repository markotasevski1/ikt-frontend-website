import {MaterialSection} from "../components/material/MaterialSection"
import NavigationMenu from "../components/navigationMenu/navigationMenu"
import {useLocation} from "react-router-dom";

export default function Materials() {
    const location = useLocation();
    const {state} = location;
    let levelId = null;
    if(state != null) {
        levelId = state.levelId;
    }

    return (
        <div>
            <NavigationMenu/>
            <div className="materialsPageStyling">
                <MaterialSection levelId={levelId}/>
            </div>
        </div>
    )
}
