import {Marker, Tooltip} from "react-leaflet";
import type {ReactNode} from "react";
import L from "leaflet"

type Props = {
  coords: [number, number],
  children: ReactNode
}

export function MyMarker({coords, children}: Props) {

  const myCustomIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // или путь к твоей картинке
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  return (
    <Marker position={coords} icon={myCustomIcon}>
      <Tooltip permanent direction="top" offset={[0, -40]}>
        {children}
      </Tooltip>
    </Marker>
  );
};