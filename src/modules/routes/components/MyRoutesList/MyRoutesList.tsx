import styles from "./style.module.css";
import type {RouteItemType} from "../../types/RouteItemType.ts";
import {MyNavigationItem} from "../../ui/MyNavigationItem.tsx";
import {UseRoutesList} from "../../hooks/UseRoutesList.tsx";

type Props = {
  routes: RouteItemType[];
};

export function MyRoutesList({routes}: Props) {
  const {onNavigateHandler} = UseRoutesList();

  return <ul className={styles.container}>
    {routes.map((route) => (
      <li key={route.name} className={styles.card}>
        <MyNavigationItem
          onClick={() => onNavigateHandler(route)}
          name={route.name}
        />
      </li>
    ))}
  </ul>
};