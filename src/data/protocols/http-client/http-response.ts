export enum httpStatusCode {
  unauthorized = 401,
  forbidden = 403,
  ok = 200
}

export interface httpResponse<T> {
  statusCode: httpStatusCode
  body?: T
}
