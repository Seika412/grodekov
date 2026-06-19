import type {GameCardItemType} from "../types/GameCardItemType.ts";
import {gameCards} from "../../../mocks/gameData.ts";

class GameService {

  async getAllGames(): Promise<GameCardItemType[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(gameCards);
      }, 1000);
    });
  }
}

export default new GameService()