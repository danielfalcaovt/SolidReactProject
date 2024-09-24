/* eslint-disable @typescript-eslint/return-await */
import { IHttpPostClient, IHttpPostClientParams } from 'data/protocols/http-client/http-post-client'
import { Authentication, AuthenticationParams } from 'domain/usecases/authentication'
import * as faker from 'faker'
import { RemoteAuthentication } from './remote-authentication'

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
    async post (httpClientParams: IHttpPostClientParams): Promise<void> {
      return new Promise((resolve) => resolve())
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
})
