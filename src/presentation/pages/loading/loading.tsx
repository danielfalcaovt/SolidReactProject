import React from 'react'
import Loader from '@/presentation/components/loader/loader'
import * as styles from './loading-styles.scss'

export default function LoadingPage (): JSX.Element {
  return (
    <div className={styles.loading}>
      <Loader />
    </div>
  )
}
