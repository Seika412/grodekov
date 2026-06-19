import {$api} from "../../../http";
import {ROUTES_CONSTANTS} from "../constants";
import type {RouteItemType} from "../types/RouteItemType.ts";

class RouteService {
  async getRoutesByContextId(contextId: number): Promise<RouteItemType[]> {
    const response = await $api.get(ROUTES_CONSTANTS.GET_ROUTES_BY_EXHIBIT_ID(contextId))
    return response.data;
  }

  async getAllRoutes(): Promise<RouteItemType[]> {
    const response = await $api.get(ROUTES_CONSTANTS.GET_ALL_ROUTES)
    return response.data;
  }
}


export default new RouteService();