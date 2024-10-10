import React from 'react'
import Login from './login'
import { render } from '@testing-library/react'

describe('Login Component', () => {
  it('Should render initial state', async () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = getByTestId('submit-button')
    expect((submitButton as HTMLButtonElement).disabled).toBeTruthy()
  })
})
