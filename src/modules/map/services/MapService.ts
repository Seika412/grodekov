import {$api} from "../../../http";
import {MAP_CONSTANTS} from "../constants";
import type {GenerateNavigationRequest} from "../types/requests/GenerateNavigationRequest.ts";
import type {FeatureCollection, Geometry} from "geojson";

class MapService {

  async getMapByLevel(level: 1 | 2 | 3): Promise<FeatureCollection<Geometry, unknown>> {
    const response = await $api.get<FeatureCollection<Geometry, unknown>>(MAP_CONSTANTS.GET_MAP_GEOMETRY_BY_LOCATION_URL(level));
    return response.data;
  }

  async generateNavigation(generationNavigationRequest: GenerateNavigationRequest): Promise< FeatureCollection<Geometry, unknown>> {
    const response = await $api.get<FeatureCollection<Geometry, unknown>>(MAP_CONSTANTS.GENERATE_NAVIGATION_URL(generationNavigationRequest))
    return response.data
  }
}

export default new MapService()