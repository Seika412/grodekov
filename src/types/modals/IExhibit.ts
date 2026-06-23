import type {ICategory} from "./ICategory.ts";
import type {IArticle} from "./IArticle.ts";

export interface IExhibit {
  id: number;
  name: string;
  popular: boolean;
  created_at: string;
  updated_at: string;
  categories: ICategory[],
  article: IArticle
}