import {toast} from "sonner";
import {useCallback} from "react";

export function UseLocation() {
  const getUserLocation = useCallback((): Promise<Location> => {


    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const error = new Error("Геолокация не поддерживается");
        toast.error(error.message);
        reject(error);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const loc: Location = {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          resolve(loc);
        },
        (error) => {
          console.error("Geolocation error:", error.code, error.message);

          let errorMessage = "Не удалось определить местоположение";
          switch (error.code) {
            case error.TIMEOUT:
              errorMessage = "Превышено время ожидания";
              break;
            case error.PERMISSION_DENIED:
              errorMessage = "Доступ к геолокации запрещён";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Местоположение недоступно";
              break;
          }

          toast.error(errorMessage);
          reject(new Error(errorMessage));
        },
        {
          enableHighAccuracy: false,
          timeout: 20000,
          maximumAge: 0,
        }
      );
    });
  }, []);

  return {
    getUserLocation
  }
};