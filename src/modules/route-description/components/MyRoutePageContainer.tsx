import {useParams} from "react-router";
import {useQuery} from "@tanstack/react-query";
import RouteDescriptionService from "../services/RouteDescriptionService.ts";
import {MyRouteCard} from "./MyRoutePageContent/MyRouteCard.tsx";

export function MyRoutePageContainer() {
  const { id } = useParams<{ id: string }>();
  const {data, error, isLoading} = useQuery({
    queryKey: ["get:all:contexts"],
    queryFn: async () => {
      return await RouteDescriptionService.getDescriptionRouteById(Number(id))
    }
  })

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    <div>Произошла ошибка</div>;
  }

  return (
    <>
      <MyRouteCard data={data} />
    </>
  );
};