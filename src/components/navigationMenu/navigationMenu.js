import "../../style/NavigationMenuStyle.scss";
import { NavItems } from "./NavItems";
function NavigationMenu(className) {

  return (
    <div className="navigationMenu">
      <h1>Logo</h1>
      <NavItems />
    </div>
  );
}
export default NavigationMenu;
