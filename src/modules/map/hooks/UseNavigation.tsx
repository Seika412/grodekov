import {useQuery} from "@tanstack/react-query";
import MapService from "../services/MapService.ts";
import {useMapStore} from "../../../store/MapStore.ts";

export function UseNavigation() {
  const {fromLat, fromLng, fromLevel, exhibitId} = useMapStore();

  const canGenerateRoute = Boolean(
    fromLng &&
    fromLat &&
    fromLevel &&
    exhibitId
  )

  const {data, error, isLoading} = useQuery({
    queryKey: ["get:navigation:geometry", fromLevel, fromLat, fromLng, exhibitId],
    queryFn: async () => {
      return await MapService.generateNavigation({
        from_lat: Number(fromLat),
        from_lng: Number(fromLng),
        from_level: Number(fromLevel),
        to_exhibit_id: Number(exhibitId),
      })
    },
    enabled: canGenerateRoute
  })

  if (error) {
    console.error(error)
  }

  return {
    data,
    isLoading,
    error
  }
}