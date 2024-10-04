/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import * as styles from './login-styles.scss'
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
      <header className={styles.header}>
        <img src="data:image/png;base64,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" />
        <h1>deenedev</h1>
      </header>
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
          <span className={styles.errorWrap}>Error</span>
        </div>
      </form>
      <footer className={styles.footer} />
    </div>)
}
