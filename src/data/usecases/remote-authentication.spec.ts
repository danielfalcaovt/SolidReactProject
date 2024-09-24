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
import { UnexpectedError } from '@/domain/errors/unexpected-error'

interface SutTypes {
  sut: Authentication
  httpClientStub: IHttpPostClient
}

const makeSut = (): SutTypes => {
  const url = 'any_url'
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
          body: 'any_token'
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
    const { sut, httpClientStub } = makeSut()
    const postSpy = jest.spyOn(httpClientStub, 'post')
    const expectedRequest = makeFakeRequest()
    await sut.auth(expectedRequest)
    expect(postSpy).toHaveBeenCalledWith({
      url: 'any_url',
      body: expectedRequest
    })
  })
  it('Should throw InvalidCredentialsError if httpClientStub returns statusCode 401', async () => {
    const { sut, httpClientStub } = makeSut()
    jest.spyOn(httpClientStub, 'post').mockReturnValueOnce(
      Promise.resolve({
        statusCode: httpStatusCode.unauthorized
      })
    )
    const response = sut.auth(makeFakeRequest())
    await expect(response).rejects.toThrow(new InvalidCredentialsError())
  })
  it('Should return correct value if httpClientStub succeed', async () => {
    const { sut } = makeSut()
    const response = await sut.auth(makeFakeRequest())
    expect(response).toBe('any_token')
  })
  it('Should return UnexpectedError if httpClientStub returns any error', async () => {
    const { sut, httpClientStub } = makeSut()
    jest.spyOn(httpClientStub, 'post').mockReturnValueOnce(Promise.resolve({
      statusCode: httpStatusCode.forbidden
    }))
    const promise = sut.auth(makeFakeRequest())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
