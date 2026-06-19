import {useQuery} from "@tanstack/react-query";
import { MyEventList } from "./MyEventList/MyEventList.tsx";
import EventService from "../services/EventService.ts";

export function MyEventContainer() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["get:all:events"],
    queryFn: async () => {
      return await EventService.getAllEvents()
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
      data ?
        <MyEventList items={data} />
        :
        <div>hellow</div>
  );
};