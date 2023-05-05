import { Level } from "../components/levels/level";
import NavigationMenu from "../components/navigationMenu/navigationMenu";

export default function Levels() {
  return (
    <div>
      <NavigationMenu/>
      <div className="levelsPageStyling">
        <Level className="levelComponents"/>
      </div>
    </div>
  );
}
