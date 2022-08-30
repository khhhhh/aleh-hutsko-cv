import styles from '../styles/Button.module.scss'


export default function Button({fontSize = '1em', children, onClick, id}) {
  return (
    <button style={{fontSize: `${fontSize}`}} onClick={onClick} id={id} className={styles.button}>{children}</button>
  )
}
