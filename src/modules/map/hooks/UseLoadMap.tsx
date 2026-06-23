import {useQuery} from "@tanstack/react-query";
import MapService from "../services/MapService.ts";

type Props = {
  level: 1 | 2 | 3
};

export function UseLoadMap({level}: Props) {
  const {data, error, isLoading} = useQuery({
    queryKey: ["get:map:geometry"],
    queryFn: async () => {
      return await MapService.getMapByLevel(level)
    }
  })



  return {
    data,
    error,
    isLoading,
  }
};