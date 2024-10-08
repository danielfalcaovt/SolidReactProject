import React from 'react'
import * as styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLSpanElement> // tipo de elemento do react, aonde possui todas as propriedades de um elemento html normal.

export default function Spinner (props: Props): JSX.Element {
  return (
    <h1 className={[styles.spinner, props.className].join(' ')}>
      Spinnador
    </h1>
  )
}
