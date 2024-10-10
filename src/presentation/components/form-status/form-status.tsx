import React, { useContext } from 'react'
import Spinner from '../spinner/spinner'
import * as styles from './form-status-styles.scss'
import Context from '@/presentation/components/contexts/form-context'

export default function FormStatus (): JSX.Element {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid='error-wrap' className={styles.error}>
      {isLoading && <Spinner className={styles.spinner} />}
      {errorMessage && <span className={styles.errorWrap}>{errorMessage}</span>}
    </div>
  )
}
