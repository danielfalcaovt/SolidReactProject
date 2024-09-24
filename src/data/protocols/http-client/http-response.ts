export enum httpStatusCode {
  unauthorized = 401,
  ok = 200
}

export interface httpResponse {
  statusCode: httpStatusCode
  body?: any
}
