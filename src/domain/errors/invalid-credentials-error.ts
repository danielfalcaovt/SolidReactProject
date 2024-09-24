export class InvalidCredentialsError extends Error {
  constructor () {
    super('InvalidCredentialsError')
    this.name = 'InvalidCredentialsError'
  }
}
