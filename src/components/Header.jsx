import styles from "./Header.module.css"

import feedLogo from '../assets/img/logo-feed.png'

export function Header() {
  return (
    <header className={styles.header}>
        <img src={feedLogo} alt="" />
    </header>
  )
}
