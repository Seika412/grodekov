import type {IContent} from "./IContent.ts";


export interface IArticle {
  id: number;
  exhibit_id: number;
  audio: string;
  content: IContent[];
  created_at: string;
  updated_at: string;
}