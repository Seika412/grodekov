import type {RouteDescriptionItemType} from "../types/RouteDescriptionItemType.ts";
import {ROUTE_DESCRIPTION_ITEMS} from "../../../mocks/routeDescriptionItemData.ts";


class RouteDescriptionService {

  async getDescriptionRouteById(routeId: number): Promise<RouteDescriptionItemType> {
    console.log(routeId)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ROUTE_DESCRIPTION_ITEMS);
      }, 1000);
    });
  }
}

export default new RouteDescriptionService()