import {MySubtitle} from "../../../ui/MySubtitle/MySubtitle.tsx";
import {useQuery} from "@tanstack/react-query";
import GameService from "../services/GameService.ts";
import {MyGameList} from "./MyGameList/MyGameList.tsx";

export function MyGameContainer() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["get:all:games"],
    queryFn: async () => {
      return await GameService.getAllGames()
    }
  })

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    console.log(error)
    return <div>Произошла ошибка</div>;
  }

  return (
    <>
      <MySubtitle text={"Пройди игру и получи приз от музея"} title={"Игра"} />
      <MyGameList items={data || []} />
    </>
  );
};

