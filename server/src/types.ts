export interface QueryParams {
  _q: string;
  sort: string;
  page: number;
  pageSize: number;
}

export interface RequestParams {
  query: QueryParams;
}
