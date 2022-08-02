import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import React from 'react';
import Button from './Button';


const getMode = () => {
    let mode = localStorage.getItem('theme');
    if (!mode) {
      var color = getComputedStyle(document.documentElement, null).getPropertyValue('background-color');
      console.log(color);
      if (color == 'rgb(40, 40, 40)')
        mode = 'dark';
      else
        mode = 'light';
    }
    return mode;
}

export default function Header () {
  const [icon, setIcon] = React.useState('');
  const [styleMenu, setStyleMenu] = React.useState([styles.menu]);

  React.useEffect(() => {
    let mode = getMode();
    console.log(mode);
    if (mode == 'light') {
      setIcon('far fa-sun');
    } else {
      setIcon('far fa-moon');
    }
  }, []);

  function showHide() {
    if (styleMenu.length > 1)
      setStyleMenu([styles.menu]);
    else
      setStyleMenu([styles.menu, styles.menushow].join(' '));
  }

  function switchTheme() {
    let mode = getMode();
    if (mode == 'light') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setIcon('far fa-moon');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      setIcon('far fa-sun');
    }
  }

  return <nav className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <svg className={styles.ico} xmlnsXlink="http://www.w3.org/2000/svg" xmlnssvg="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 12.7 12.7" id="svg5">
              <path d="M 0.00103458,11.368649 C 0.01935219,11.302716 3.1037209,2.997717 3.1135361,2.9879039 c 0.00478,-0.00476 0.4944167,-0.00595 1.0879601,-0.00266 l 1.079173,0.00611 -1.5594937,4.2033073 -1.5594931,4.2033098 -1.0861297,0.0062 c -1.02704189,0.0064 -1.08549929,0.0047 -1.07451812,-0.03566 z" id="path796" />
              <path d="m 3.677542,7.6162952 c 8.64e-4,-0.0098 0.089143,-0.263596 0.1961515,-0.564002 l 0.1945586,-0.546192 1.2343276,-0.01614 c 0.6788809,-0.0089 1.2375321,-0.01293 1.2414478,-0.0091 0.011372,0.01137 0.4090749,1.114735 0.4090749,1.134918 0,0.01 -0.7373576,0.01823 -1.6385756,0.01823 -0.901218,0 -1.6378604,-0.0081 -1.6369848,-0.01782 z" id="path798" />
              <path d="M 8.2532222,10.834781 C 8.0538922,10.313395 5.3517587,3.0478012 5.3448112,3.0145399 5.33576,2.9711915 5.4126474,2.9373339 6.1125857,2.6764623 6.5403966,2.5170138 6.894172,2.3903061 6.8987562,2.39489 c 0.00476,0.00446 0.2982442,0.7872147 0.6525771,1.7391807 0.3543337,0.9519666 0.6461654,1.7335885 0.6485113,1.7369395 0.0045,0.0061 1.2721317,-0.4628858 1.2846334,-0.4753925 0.00438,-0.00383 -0.2853932,-0.791491 -0.6426908,-1.7503731 L 8.1921322,1.9018251 8.9773085,1.6091725 C 9.4091417,1.448213 9.7653767,1.3194308 9.7689358,1.3229887 9.7808334,1.3348735 12.7,9.1784024 12.7,9.1984494 c 0,0.029 -1.548386,0.601871 -1.567215,0.579809 -0.0089,-0.01034 -0.301693,-0.788166 -0.650908,-1.7285732 -0.349218,-0.940398 -0.6421958,-1.716175 -0.651066,-1.723947 -0.011651,-0.01018 -0.9663702,0.334433 -1.2696871,0.458286 -0.010306,0.0042 0.2740434,0.792949 0.6318317,1.75278 L 9.8434501,10.281946 9.1047756,10.55751 c -0.8935334,0.333304 -0.8371499,0.314951 -0.8515534,0.277271 z" id="path800" />
            </svg>
            <span>aleh.hutsko</span>
          </a>
        </Link>
      </div>

      <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
        <div className={styleMenu}>
          <Link href=''>
            <a>
              Projects
            </a>
          </Link>
          <a href='https://www.linkedin.com/in/aleh-hutsko/' rel="noreferrer" target="_blank"> LinkedIn </a>
          <a href='https://github.com/khhhhh/' rel="noreferrer" target="_blank"> GitHub </a>
        </div>
        <Button onClick={() => switchTheme()}>
          <i className={icon}></i>
        </Button>
        <Button id={styles.hamburger} onClick={() => showHide()}>
          <svg viewBox="0 0 80 80" width="18" height="18">
            <rect y='10' width="80" height="10"></rect>
            <rect y="30" width="80" height="10"></rect>
            <rect y="50" width="80" height="10"></rect>
          </svg>
        </Button>
      </div>
    </div>
  </nav>
}