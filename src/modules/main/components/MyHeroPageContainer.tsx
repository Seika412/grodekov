import {MyMainNavigationList} from "./MyMainNavigationList/MyMainNavigationList.tsx";
import {MENU_ITEMS} from "../../../contents/MyMenuItems.ts";

export function MyHeroPageContainer() {
  return <MyMainNavigationList items={MENU_ITEMS} />;
}
