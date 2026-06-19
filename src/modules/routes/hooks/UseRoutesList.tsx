import type {RouteItemType} from "../types/RouteItemType.ts";
import {toast} from "sonner";
import {useNavigate} from "react-router";
import {useMapStore} from "../../../store/MapStore.ts";
import {UseLocation} from "../../landmark/hooks/UseLocation.tsx";
import {useGlobalStore} from "../../../store/GlobalStore.ts";
import {useEffect} from "react";

export function UseRoutesList() {
  const navigate = useNavigate();
  const {getUserLocation} = UseLocation();
  const {setIsLoading} = useGlobalStore();
  const {setFromLat, setFromLng, setFromLevel, setExhibitId, setIsFromMyLocation} = useMapStore();

  useEffect(() => {
    getUserLocation()
      .then((coords) => {
        console.log("Координаты для карты получены:", coords);
      })
      .catch((error) => {
        console.log(error)
        if (error.code === 1) toast.error("Пожалуйста, разрешите доступ к геопозиции.");
      })
  }, [getUserLocation]);

  const onNavigateHandler = async (route: RouteItemType) => {
    setIsLoading(true);
    let coords: { lat: number; lng: number };
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      coords = await getUserLocation();
      console.log(coords)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
    } catch (error: GeolocationPositionError) {
      if (error.code === 1) {
        toast.error("Вы запретили доступ к геолокации. Разрешите доступ в настройках, чтобы построить маршрут от вас.");
      } else {
        toast.error("Не удалось получить ваше местоположение. Попробуйте еще раз.");
      }
      console.log(error)
      setIsLoading(false)
      return;
    }

    const fromLat = coords.lat.toFixed(8);
    const toLng = coords.lng.toFixed(8);
    const  locationText = `Текущее местоположение (${coords.lat.toFixed(8)}, ${coords.lng.toFixed(8)})`;

    toast.success(`Идем из: ${locationText} в: ${route.name}`);

    setExhibitId(route.id)
    setFromLat(fromLat)
    setFromLng(toLng)
    setIsFromMyLocation(true)
    setFromLevel(1)
    navigate(`/routes/:context/map/`)
    setIsLoading(false);
  }

  return {
    onNavigateHandler
  }
};