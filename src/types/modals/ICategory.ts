export interface ICategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  pivot: {
    exhibit_id: string;
    exhibit_category_id: string;
  }
}