/* eslint-disable @typescript-eslint/no-throw-literal */
import { IHttpPostClientParams } from '@/data/protocols/http-client/http-post-client'
import faker from 'faker'
import axios from 'axios'
import { mockAxios } from './test/mock-axios'
import { AxiosHttpClient } from './axios-post-client'

jest.mock('axios')

interface SutTypes {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeFakeRequest = (): IHttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: {
    field: 'any_value'
  }
})

const makeSut = (): SutTypes => {
  const mockedAxios = mockAxios()
  const sut = new AxiosHttpClient()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosPostClient', () => {
  it('Should call axios with correct values', async () => {
    const { sut, mockedAxios } = makeSut()
    const postSpy = jest.spyOn(mockedAxios, 'post')
    const expectedValue = makeFakeRequest()
    await sut.post(expectedValue)
    expect(postSpy).toHaveBeenCalledWith(expectedValue.url, expectedValue.body)
  })
  it('Should return httpResponse if axios throws an error', async () => {
    const { sut, mockedAxios } = makeSut()
    jest.spyOn(mockedAxios, 'post').mockImplementationOnce(() => {
      throw {
        response: {
          status: 400,
          data: []
        }
      }
    })
    const response = await sut.post(makeFakeRequest())
    expect(response).toEqual({
      statusCode: 400,
      body: []
    })
  })
})
