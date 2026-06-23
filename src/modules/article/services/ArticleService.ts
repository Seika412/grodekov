import {$api} from "../../../http";
import type {IExhibit} from "../../../types/modals/IExhibit.ts";
import type {IArticle} from "../../../types/modals/IArticle.ts";


class ArticleService {

  async getArticleByExhibitId(exhibitId: number | null): Promise<IArticle> {
    const exhibitItem = await $api.get<IExhibit>(`/api/exhibits/${exhibitId}`)
    return exhibitItem.data.article;
  }
}

export default new ArticleService()