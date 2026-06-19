import {$api} from "../../../http";
import {EVENT_CONSTANTS} from "../constants";
import type {EventItemType} from "../types/EventItemType.ts";

class ContextService {

  async getAllEvents(): Promise<EventItemType[]> {
    const response = await $api.get<EventItemType[]>(EVENT_CONSTANTS.GET_ALL_EVENTS_URL);
    return response.data;
  }
}

export default new ContextService()