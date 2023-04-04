import { NavItem } from "./NavItem";
import "../../style/NavigationMenuStyle.scss";
export function NavItems() {
  const navItems = ["Почетна", "Левели", "За нас", "Профил"]; // an array of nav item names

  return (
    <div className="navItems">
      {navItems.map((text) => (
        <NavItem className="NavItem" text={text} />
      ))}
    </div>
  );
}
