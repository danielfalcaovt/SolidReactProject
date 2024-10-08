import React from 'react'
import * as styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLSpanElement> // tipo de elemento do react, aonde possui todas as propriedades de um elemento html normal.

export default function Spinner (props: Props): JSX.Element {
  return (
    /* From Uiverse.io by G4b413l */
    <div className={styles.loader}>
    <div className={styles.bar1}></div>
    <div className={styles.bar2}></div>
    <div className={styles.bar3}></div>
    <div className={styles.bar4}></div>
    <div className={styles.bar5}></div>
    <div className={styles.bar6}></div>
    <div className={styles.bar7}></div>
    <div className={styles.bar8}></div>
    <div className={styles.bar9}></div>
    <div className={styles.bar10}></div>
    <div className={styles.bar11}></div>
    <div className={styles.bar12}></div>
</div>
  )
}
