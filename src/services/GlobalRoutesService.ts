import {$api} from "../http";
import type {MyRouteCardItemType} from "../types/MyRouteCardItemType.ts";

const GLOBAL_ROUTES_CONSTANTS = {
  GET_ALL_POPULAR_ROUTES_URL: "http://45.90.34.16:8000/api/exhibits?popular=1"
}

class GlobalRoutesService {

  async getAllPopularRoutes(): Promise<MyRouteCardItemType[]> {
    const response = await $api.get<MyRouteCardItemType[]>(GLOBAL_ROUTES_CONSTANTS.GET_ALL_POPULAR_ROUTES_URL);
    return response.data;
  }
}

export default new GlobalRoutesService()