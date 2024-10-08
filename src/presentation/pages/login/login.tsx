/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import * as styles from './login-styles.scss'
import Header from '@/presentation/components/login-header/header'
import Footer from '@/presentation/components/login-footer/footer'
import LoadingPage from '../loading/loading'
import Spinner from '../../components/spinner/spinner'

export default function Login (): JSX.Element {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    loading
      ? <LoadingPage/>
      : <div className={styles.login}>
      <Header/>
      <form className={styles.form}>
        <h2>Login</h2>
        <div className={styles.inputWrap}>
          <input type="email" name="email" placeholder="Insira seu email" />
          <span>🤬</span>
        </div>
        <div className={styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Insira sua senha"
          />
          <span>🤬</span>
        </div>
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
