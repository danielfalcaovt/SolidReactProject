import React from 'react'
import * as styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function Input (props: Props): JSX.Element {
  const autoCompleteRemover = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  return (
    <div className={styles.inputWrap}>
      <input readOnly onFocus={autoCompleteRemover} {...props} />
      <span>🤬</span>
    </div>
  )
}
