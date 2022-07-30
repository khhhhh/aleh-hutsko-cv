import styles from '../styles/Button.module.scss'

export default function Button({text, fontSize = '1em', children}) {
  return (
    <button style={{fontSize: `${fontSize}`}} className={styles.button}>{children}</button>
  )
}
