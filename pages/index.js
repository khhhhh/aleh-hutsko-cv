import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Aleh Hutsko - Homepage</title>
          <meta name="description" content="Aleh Hutsko CV" />
          <link rel="icon" href="/test.svg" />
          <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet' />
          {/* <Document href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c'></Document> */}
        </Head>

        <main className={styles.main}>
          <div className={styles.firstSec}>
            <img className={styles.profilePic} src="face.jpg" alt="A human being" />
            <div>
              <h1 className={styles.title}>
                Aleh Hutsko
              </h1>
              <div className={styles.code} >Hi, I'm a Web Developer from Belarus!</div>
              <Button><a href='mailto:oleg.hutsko@gmail.com'>Contact Me!</a></Button>
            </div>
          </div>

          <div className={styles.secondSec}>
            <div>
              <h3>Work</h3>
              <div>Right now i'm working in a Polish company called <a href='https://zetolublin.pl/' target="_blank">Zeto Lublin</a>.</div>
            </div>
            <div>
              <h3>Technologies</h3>
              <div>
                I've used .Net as core technology for most of my career. 
                At the moment I'm also learning Next.Js, MongoDB, and many other technologies.
                This WebSite is a practical part of my learning.
                <div>
                  <ul>
                    <li>C# (.NET WebForms, MVC, RazorPages)</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3>Education</h3>
              <table>
                <tbody>
                  <tr>
                    <td>2016 - 2019</td>
                    <td><a href='https://kbp.by/'>College of Business and Law</a>, Minsk, Belarus</td>
                  </tr>
                  <tr>
                    <td>2019 - 2022</td>
                    <td><a href='https://www.umcs.pl/en/'>Maria Curie-Skłodowska University</a>, Lublin, Poland</td>
                  </tr></tbody>
              </table>
            </div>
          </div>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  )
}
