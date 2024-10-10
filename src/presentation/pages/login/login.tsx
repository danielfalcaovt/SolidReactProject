/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import * as styles from './login-styles.scss'
import { Footer, Header, Input, Spinner } from '../../components'
import LoadingPage from '../loading/loading'

export default function Login (): JSX.Element {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return loading
    ? <LoadingPage />
    : (
    <div className={styles.login}>
      <Header />
      <form className={styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Insira seu email" />
        <Input type="password" name="password" placeholder="Insira sua senha" />
        <button type="submit">Enviar</button>
        <span className={styles.link}>Criar Conta</span>
        <div className={styles.error}>
          <Spinner className={styles.spinner} />
          <span className={styles.errorWrap}>Error</span>
        </div>
      </form>
      <Footer />
    </div>)
}
