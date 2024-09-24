/* eslint-disable @typescript-eslint/return-await */
import {
  IHttpPostClient,
  IHttpPostClientParams
} from '@/data/protocols/http-client/http-post-client'
import {
  Authentication,
  AuthenticationParams
} from '@/domain/usecases/authentication'
import * as faker from 'faker'
import { RemoteAuthentication } from './remote-authentication'
import {
  httpResponse,
  httpStatusCode
} from '@/data/protocols/http-client/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'

interface SutTypes {
  sut: Authentication
  httpClientStub: IHttpPostClient
}

const makeSut = (url: string): SutTypes => {
  const httpClientStub = makeHttpClientStub()
  const sut = new RemoteAuthentication(url, httpClientStub)
  return {
    sut,
    httpClientStub
  }
}
const makeHttpClientStub = (): IHttpPostClient => {
  class HttpClientStub implements IHttpPostClient {
    async post (httpClientParams: IHttpPostClientParams): Promise<httpResponse> {
      return new Promise((resolve) =>
        resolve({
          statusCode: httpStatusCode.ok,
          body: {}
        })
      )
    }
  }
  return new HttpClientStub()
}

const makeFakeRequest = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

describe('RemoteAuthentication', () => {
  it('Should call httpClient with correct values', async () => {
    const { sut, httpClientStub } = makeSut('any_url')
    const postSpy = jest.spyOn(httpClientStub, 'post')
    const expectedRequest = makeFakeRequest()
    await sut.auth(expectedRequest)
    expect(postSpy).toHaveBeenCalledWith({
      url: 'any_url',
      body: expectedRequest
    })
  })
  it('Should throw InvalidCredentialsError if httpClientStub returns statusCode 401', async () => {
    const { sut, httpClientStub } = makeSut('any_url')
    jest.spyOn(httpClientStub, 'post').mockReturnValueOnce(
      Promise.resolve({
        statusCode: httpStatusCode.unauthorized
      })
    )
    const response = sut.auth(makeFakeRequest())
    await expect(response).rejects.toThrow(new InvalidCredentialsError())
  })
})
