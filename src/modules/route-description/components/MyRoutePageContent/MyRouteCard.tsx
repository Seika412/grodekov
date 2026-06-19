import type {RouteDescriptionItemType} from "../../types/RouteDescriptionItemType.ts";
import styles from "./style.module.css"
import {MyButton} from "../../../../ui/MyButton/MyButton.tsx";
import {useNavigate} from "react-router";

type Props = {
  data?: RouteDescriptionItemType;
};

export function MyRouteCard({data}: Props) {
  const navigate = useNavigate()
  if (!data) {
    return <div>Route not found</div>;
  }

  const toMapHandler = () => {
    navigate(`/routes/${data.title}/map`)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>

      <p className={styles.description}>
        {data.description}
      </p>

      <div className={styles.routeInfo}>
        <h3 className={styles.routeTitle}>Проложить маршрут до бобров</h3>
        <p className={styles.routeStep}>Первый шаг</p>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={data.image_path}
          alt={data.title}
          className={styles.image}
        />
      </div>

      <MyButton onClick={() => toMapHandler()}>
        Идем к бобрам
      </MyButton>
    </div>
  );
};