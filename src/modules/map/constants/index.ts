import type {GenerateNavigationRequest} from "../types/requests/GenerateNavigationRequest.ts";

export const MAP_CONSTANTS = {
  GET_MAP_GEOMETRY_BY_LOCATION_URL: (level: 1 | 2 | 3) => `api/map/levels/${level}`,
  GENERATE_NAVIGATION_URL: (generationNavigationRequest: GenerateNavigationRequest) => {
    return `api/navigation/route?from_lat=${generationNavigationRequest.from_lat}&from_lng=${generationNavigationRequest.from_lng}&from_level=${generationNavigationRequest.from_level}&to_exhibit_id=${generationNavigationRequest.to_exhibit_id}`
  }
  ,
}