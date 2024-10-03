export enum httpStatusCode {
  unauthorized = 401,
  serverError = 500,
  forbidden = 403,
  badRequest = 400,
  ok = 200
}

export interface httpResponse<T> {
  statusCode: httpStatusCode
  body?: T
}
