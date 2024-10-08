import React from 'react'
import * as styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function Input (props: Props): JSX.Element {
  return (
    <div className={styles.inputWrap}>
      <input {...props} />
      <span>🤬</span>
    </div>
  )
}
