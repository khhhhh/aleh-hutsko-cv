import styles from '../styles/Header.module.scss'
import Link from 'next/link';

export default function () {
  return <nav className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <img className={styles.ico} src='/test.svg' />
            <span>aleh.hutsko</span>
          </a>
        </Link>
      </div>

      <div className={styles.menu}>
        <Link href=''>
          <a>
            Projects
          </a>
        </Link>
        <a href='https://github.com/khhhhh/' target='_blank'>
          GitHub
        </a>
        <button onClick={() => console.log('test')}>
          Change Color
        </button>
        <button className='hamburger'>
          text
        </button>
      </div>
    </div>
  </nav>
}