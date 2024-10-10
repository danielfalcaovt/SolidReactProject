/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import * as styles from './login-styles.scss'
import { Footer, Header, Input, Spinner } from '../../components'
import LoadingPage from '../loading/loading'
import Context from '@/presentation/components/contexts/form-context'
import FormStatus from '@/presentation/components/form-status/form-status'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

export default function Login (): JSX.Element {
  const [loading, setLoading] = useState(true)
  const [state] = useState<StateProps>({
    errorMessage: '',
    isLoading: false
  })
  useEffect(() => {
    setLoading(false)
  }, [])
  return loading
    ? <LoadingPage />
    : (
    <div className={styles.login}>
      <Header />
      <Context.Provider value={state}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Insira seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Insira sua senha"
          />
          <button data-testid='submit-button' disabled type="submit">Enviar</button>
          <span className={styles.link}>Criar Conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>)
}
