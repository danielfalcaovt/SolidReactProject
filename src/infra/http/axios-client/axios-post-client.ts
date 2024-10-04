/* eslint-disable @typescript-eslint/return-await */
import axios from 'axios'
import {
  IHttpPostClient,
  IHttpPostClientParams
} from '../../../data/protocols/http-client/http-post-client'
import { httpResponse } from '../../../data/protocols/http-client/http-response'

export class AxiosHttpClient implements IHttpPostClient<any, any> {
  async post (
    httpClientParams: IHttpPostClientParams<any>
  ): Promise<httpResponse<any>> {
    try {
      const response = await axios.post(httpClientParams.url, httpClientParams.body)
      return new Promise((resolve) =>
        resolve({
          statusCode: response.status,
          body: response.data
        })
      )
    } catch (err: any) {
      if (err.response) {
        return new Promise(resolve => resolve({
          statusCode: err.response.status,
          body: err.response.data
        }))
      } else {
        return new Promise(resolve => resolve({
          statusCode: 500
        }))
      }
    }
  }
}
