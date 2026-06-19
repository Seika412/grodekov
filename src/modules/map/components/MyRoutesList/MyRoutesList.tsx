import type {RouteItemType} from "../../types/RouteItemType.ts";
import styles from "./style.module.css"
import {MyRouteItem} from "../../ui/MyRouteItem/MyRouteItem.tsx";

type Props = {
  routes: RouteItemType[],
};

export function MyRoutesList({routes}: Props) {
  return (
    <ul className={styles.list}>
      {routes.map((route: RouteItemType, index) => (
          <MyRouteItem
            key={route.title}
            isActive={index == 0}
            title={route.title}
            subtitle={`Точка № ${index}`}
          />
      ))}
    </ul>
  );
};