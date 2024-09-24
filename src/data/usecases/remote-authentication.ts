/* eslint-disable @typescript-eslint/return-await */
import { IHttpPostClient } from '@/data/protocols/http-client/http-post-client'
import { AccountModel } from '@/domain/models/account'
import {
  Authentication,
  AuthenticationParams
} from 'domain/usecases/authentication'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: IHttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    await this.httpClient.post({
      url: this.url,
      body: params
    })
    return new Promise((resolve) =>
      resolve({
        token: 'any_token'
      })
    )
  }
}
