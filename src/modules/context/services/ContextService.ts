import type {ContextItemType} from "../types/ContextItemType.ts";
import {$api} from "../../../http";
import {CONTEXT_CONSTANTS} from "../constants";

class ContextService {

  async getAllContexts(): Promise<ContextItemType[]> {
    const response = await $api.get<ContextItemType[]>(CONTEXT_CONSTANTS.GET_ALL_EXHIBITS);
    return response.data;
  }
}

export default new ContextService()