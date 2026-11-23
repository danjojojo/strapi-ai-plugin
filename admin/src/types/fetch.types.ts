export interface QueryParams {
  _q?: string;
  sort?: string;
  page?: number;
  pageSize?: number;
}

export interface RequestParams {
  query: QueryParams;
}

export interface ResponseData {
  id: number;
  documentId: string;
  createdAt: string;
}

export interface ResponseMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Response<T extends ResponseData> {
  data: T[];
  meta: ResponseMeta;
}
