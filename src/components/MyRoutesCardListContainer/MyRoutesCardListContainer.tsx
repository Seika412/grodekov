import {MyRoutesCardList} from "../MyRoutesCardList/MyRoutesCardList.tsx";
import styles from "./style.module.css"
import {useQuery} from "@tanstack/react-query";
import GlobalRoutesService from "../../services/GlobalRoutesService.ts";
type Props = {
  title: string,
};

export function MyRoutesCardListContainer({title}: Props) {
  const {data, error, isLoading} = useQuery({
    queryKey: ["get:all:popular:routes"],
    queryFn: async () => {
      return await GlobalRoutesService.getAllPopularRoutes()
    }
  })

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    console.log(error)
    return <div>Произошла ошибка</div>;
    return <div>Произошла ошибка</div>;
  }

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {data ? <MyRoutesCardList items={data} />: <div>не удалось подгрузить</div>}
    </>
  );
};