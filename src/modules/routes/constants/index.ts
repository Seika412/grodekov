export const ROUTES_CONSTANTS = {
  GET_ROUTES_BY_EXHIBIT_ID: (id: number) => `/api/exhibits/?category_id=${id}`,
  GET_ALL_ROUTES: '/api/exhibits/'
}