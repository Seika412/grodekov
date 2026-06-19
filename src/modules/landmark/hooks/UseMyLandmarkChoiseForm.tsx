import {useEffect} from "react";
import {MyLandmarkFormSchema} from "../types/schemas/MyLandmarkFormSchema.ts";
import {UseLocation} from "./UseLocation.tsx";
import {toast} from "sonner";
import {useNavigate} from "react-router";
import {useMapStore} from "../../../store/MapStore.ts";
import type {RouteItemType} from "../../routes/types/RouteItemType.ts";
import {useGlobalStore} from "../../../store/GlobalStore.ts";

type Props = {
  currentLocation: string,
};

export function UseMyLandmarkChoiseForm({currentLocation}: Props) {
  const {getUserLocation} = UseLocation();
  const {setFromLat, setFromLng, setFromLevel, setExhibitId, setIsFromMyLocation} = useMapStore();
  const {setIsLoading} = useGlobalStore()
  const navigate = useNavigate();

  useEffect(() => {
    if (currentLocation === 'Текущее местоположение') {
      getUserLocation()
        .then((coords) => {
          console.log("Координаты для карты получены:", coords);
        })
        .catch((error) => {
          if (error.code === 1) toast.error("Пожалуйста, разрешите доступ к геопозиции.");
        });
    }
  }, [currentLocation, getUserLocation]);

  const onSubmit = async (data: MyLandmarkFormSchema, routes: RouteItemType[]) => {
    setIsLoading(true);
    let coords: { lat: number; lng: number };
    if (data.currentLocation === 'Текущее местоположение') {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        coords = await getUserLocation();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
      } catch (error: GeolocationPositionError) {
        console.log(error)
        if (error.code === 1) {
          toast.error("Вы запретили доступ к геолокации. Разрешите доступ в настройках, чтобы построить маршрут от вас.");
        } else {
          toast.error("Не удалось получить ваше местоположение. Попробуйте еще раз.");
        }
        setIsLoading(false);
        return;
      }

      const fromLat = coords.lat.toFixed(8);
      const toLng = coords.lng.toFixed(8);
      const locationText = `Текущее местоположение (${coords.lat.toFixed(8)}, ${coords.lng.toFixed(8)})`;

      toast.success(`Идем из: ${locationText} в: ${data.destination}`);
      setFromLat(fromLat);
      setFromLng(toLng);
      setIsFromMyLocation(true)
      setFromLevel(1);
      setExhibitId(routes.filter((item) => item.name === data.destination)[0].id);
      navigate(`/routes/:context/map`)
    } else {
      setIsFromMyLocation(false)
      toast.success(`Идем из: ${data.currentLocation} в: ${data.destination}`);
      navigate(`/routes/:context/map`)
    }

    setIsLoading(false);
  };

  return {
    onSubmit,
  }
};