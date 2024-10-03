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
      await axios.post(httpClientParams.url, httpClientParams.body)
      return new Promise((resolve) =>
        resolve({
          statusCode: 200,
          body: []
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
          statusCode: 500,
          body: 'Erro Inesperado. Tente novamente mais tarde.'
        }))
      }
    }
  }
}
