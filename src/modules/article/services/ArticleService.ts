import type {ArticleItemType} from "../types/ArticleItemType.ts";
import {ARTICLE_ITEMS} from "../../../mocks/articleData.ts";


class ArticleService {

  async getArticleByArticleId(articleId: number): Promise<ArticleItemType> {
    console.log(articleId )
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ARTICLE_ITEMS);
      }, 1000);
    });
  }
}

export default new ArticleService()