import React, { memo } from 'react'
import * as styles from './footer-styles.scss'

function Footer (): JSX.Element {
  return (
    <footer className={styles.footer} />
  )
}

export default memo(Footer)
