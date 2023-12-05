import styles from '../styles/Button.module.scss'


export default function Button({fontSize = '1em', children, onClick, id, className = null, ...rest}) {
  let style = className ?? styles.button;
  return (
    <button style={{fontSize: `${fontSize}`}} onClick={onClick} id={id} className={style} {...rest}>{children}</button>
  )
}
