import {MySubtitle} from "../../../ui/MySubtitle/MySubtitle.tsx";
import {useQuery} from "@tanstack/react-query";
import ContextService from "../services/ContextService.ts";
import {MyContextList} from "./MyContextList/MyContextList.tsx";


export function MyContextContainer() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["get:all:contextssdjflsdfj"],
    queryFn: async () => {
      return await ContextService.getAllContexts()
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
      <MySubtitle text={"Готовые маршруты для разных посетителей"} title={"Контексты"} />
      <MyContextList items={data || []} />
    </>
  );
};

