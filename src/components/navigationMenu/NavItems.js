import { NavItem } from "./NavItem";
import "../../style/NavigationMenuStyle.scss";
export function NavItems() {
  const navItems = ["Home Page", "About us", "Levels", "Materials", "Profile", "Log Out"]; // an array of nav item names

  return (
    <div className="navItems">
      {navItems.map((text) => (
        <NavItem className="NavItem" text={text} />
      ))}
    </div>
  );
}
