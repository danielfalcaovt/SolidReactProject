export enum httpStatusCode {
  unauthorized = 401,
  forbidden = 403,
  ok = 200
}

export interface httpResponse {
  statusCode: httpStatusCode
  body?: any
}
