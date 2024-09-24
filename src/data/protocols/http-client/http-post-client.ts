import { httpResponse } from './http-response'

export interface IHttpPostClient {
  post: (httpClientParams: IHttpPostClientParams) => Promise<httpResponse>
}

export interface IHttpPostClientParams {
  url: string
  body?: object
}
