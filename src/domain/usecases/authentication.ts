import { AccountModel } from 'domain/models/account'

export interface AuthenticationParams {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
