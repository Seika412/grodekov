import {useEffect, useState} from "react";
import {Marker, Tooltip, useMapEvents} from "react-leaflet";
import L from "leaflet"
import {useMapStore} from "../../../../store/MapStore.ts";

export function MyLocationMarker() {
  const [position, setPosition] = useState(null);
  const {setFromLng, setFromLat, isFromMyLocation} = useMapStore()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const map = useMapEvents({
    locationfound(e: L.LocationEvent) {
      setPosition(e.latlng);
      if (isFromMyLocation) {
        setFromLat(e.latlng.lat)
        setFromLng(e.latlng.lng)
      }
    },
    locationerror(e: L.ErrorEvent) {
      console.error("Ошибка геолокации:", e);
    }
  });

  useEffect(() => {
    map.locate({ watch: true, enableHighAccuracy: true });

    // navigator.geolocation.getCurrentPosition(
    //   (location) => console.log(location),
    //   (err) => console.error("Ошибка:", err)
    // );

    return () => {
      map.stopLocate();
    }

  }, [])



  return position === null ? null : <Marker position={position} >
    <Tooltip permanent direction="top" offset={[-15, -10]}>
      Вы здесь
    </Tooltip>
  </Marker>;
};