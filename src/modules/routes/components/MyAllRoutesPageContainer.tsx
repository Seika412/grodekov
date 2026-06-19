import {MyRoutesList} from "./MyRoutesList/MyRoutesList.tsx";
import {useQuery} from "@tanstack/react-query";
import RouteService from "../services/RouteService.ts";

type Props = {
  contextId: number
}

export function MyAllRoutesPageContainer({contextId}: Props) {
  const {data, error, isLoading} = useQuery({
    queryKey: [`get:all:routes:by:context:${contextId}`],
    queryFn: async () => {
      return await RouteService.getRoutesByContextId(contextId)
    }
  })

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    <div>Произошла ошибка</div>;
  }

  return <MyRoutesList routes={data || []} />;
};
