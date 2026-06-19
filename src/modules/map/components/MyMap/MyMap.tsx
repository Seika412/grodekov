import 'leaflet/dist/leaflet.css';
import styles from "./style.module.css"
import {UseLoadMap} from "../../hooks/UseLoadMap.tsx";
import {UseNavigation} from "../../hooks/UseNavigation.tsx";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import {GeoJSON, MapContainer} from "react-leaflet";
import L from 'leaflet';
import {type ReactElement, useMemo, useState} from "react";
import {UseMyMap} from "../../hooks/UseMyMap.tsx";
import {MyLocationMarker} from "../MyLocationMarker/MyLocationMarker.tsx";

type Props = {
  isFullScreen?: boolean
}

export function MyMap({isFullScreen}: Props): ReactElement {
  const [tempRouteData, setTempRouteData] = useState()
  const {data: mapGeometry, isLoading: isMapGeometryLoading} = UseLoadMap({level: 1})
  const {data: routeData} = UseNavigation()
  const {styleFeature} = UseMyMap()

  const geojsonData = useMemo(() => {
    setTempRouteData((prevState) => routeData?.levels?.[1] || prevState)
    return routeData?.levels?.[1]
  }, [routeData])

  return (
    <div className={`${styles.container} ${isFullScreen ? styles.mapContainerFullScreen : ""}`}>
      {
        isMapGeometryLoading ?
        <div className={`${styles.mapContainer} `} style={{ minHeight: '450px' }}>
          <Skeleton height="100%" containerClassName={styles.skeletonContainer} />
        </div> :
         <MapContainer
          center={[48.4734, 135.0504]}
          minZoom={-5}
          maxZoom={50}
          zoom={20}
          className={styles.mapContainer}
          attributionControl={false}
          zoomControl={false}
        >

          <GeoJSON
            data={geojsonData || tempRouteData}
            style={styleFeature}
            key={JSON.stringify(geojsonData)}
          />

           {
             mapGeometry && <GeoJSON
              pointToLayer={(_, latlng) => {
                return L.circleMarker(latlng, {
                  radius: 5,
                  fillColor: "black",
                });

              }} data={mapGeometry} style={{ color: 'blue', weight: 2, fillOpacity: 0 }}
            />
           }

           {!isFullScreen && <MyLocationMarker /> }
         </MapContainer>
      }
    </div>
  );
};