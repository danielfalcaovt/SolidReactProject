import { httpResponse } from './http-response'

export interface IHttpPostClient<T, Y> {
  post: (httpClientParams: IHttpPostClientParams<T>) => Promise<httpResponse<Y>>
}

export interface IHttpPostClientParams<T> {
  url: string
  body?: T
}
