import { MaterialSection } from "../components/material/MaterialSection"
import NavigationMenu from "../components/navigationMenu/navigationMenu"

export default function Materials(){
    return(
        <div>
            <NavigationMenu/>
            <div className="materialsPageStyling">
                <MaterialSection/>
            </div>
        </div>
    )
}