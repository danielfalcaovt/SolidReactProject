export interface IHttpPostClient {
  post: (httpClientParams: IHttpPostClientParams) => Promise<void>
}

export interface IHttpPostClientParams {
  url: string
  body?: object
}
