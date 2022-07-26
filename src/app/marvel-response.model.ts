export interface MarvelResponseData<T> {
  total: number;
  results: T[];
}

export interface MarvelResponse<T> {
  data: MarvelResponseData<T>;
}
