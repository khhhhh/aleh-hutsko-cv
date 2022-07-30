import Head from 'next/head'
import Button from '../components/Button'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home({year}) {
  return (
    <>
        <Head>
          <title>Aleh Hutsko - Homepage</title>
          <meta name="description" content="Aleh Hutsko CV" />
        </Head>

      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.firstSec}>
            <div className={styles.picContainer}>
            <Image className={styles.profilePic} src="/face.jpg" width='300px' height='400px' alt="A human being" />
            </div>
            <div>
              <h1 className={styles.title}>
                Aleh Hutsko
              </h1>
              <div className={styles.code} >Hi, I&apos;m a Web Developer from Belarus!</div>
              <a href='mailto:aleh.hutsko@live.umcs.edu.pl'><Button>Contact Me!</Button></a>
            </div>
          </div>

          <div className={styles.secondSec}>
            <div>
              <h3>About me</h3>
              <div>
              I&apos;m just a regular guy who likes to do programming. I like to create 
              and learn new technologies and development methods. Friendly, 
              humble and hard working. In my free time from teaching and 
              development I like to travel, learn foreign languages and play guitar.
              </div>
            </div>
            <div>
              <h3>Technologies</h3>
              <div>
              I&apos;ve been using .Net as my primary technology for most of my career.
              I am currently also learning React, Next.Js, and many other technologies.
                <div className={styles.icons}>
                  <i className="devicon-dotnetcore-plain"></i>
                  <i className="devicon-csharp-plain"></i>
                  <i className="devicon-html5-plain"></i>
                  <i className="devicon-css3-plain"></i>
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-git-plain-wordmark"></i>
                  <i className="devicon-vim-plain"></i>
                  <i className="devicon-linux-plain"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-nextjs-original-wordmark"></i>
                </div>
              </div>
            </div>
            <div>
              <h3>Education</h3>
              <table>
                <tbody>
                  <tr>
                    <td>2016 - 2019</td>
                    <td><a href='https://kbp.by/' rel="noreferrer" target="_blank">College of Business and Law</a>, Minsk, Belarus</td>
                  </tr>
                  <tr>
                    <td>2019 - 2022</td>
                    <td><a href='https://www.umcs.pl/en/' rel="noreferrer" target="_blank">Maria Curie-Skłodowska University</a>, Lublin, Poland</td>
                  </tr>
                  </tbody>
              </table>
            </div>
            <div>
              <h3>Languages</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Russian</td>
                    <td>Native</td>
                  </tr>
                  <tr>
                    <td>Polish</td>
                    <td>B2</td>
                  </tr>
                  <tr>
                    <td>Engilsh</td>
                    <td>B2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>© {year} Aleh Hutsko. All Rights Reserved.</footer>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let year = new Date().getFullYear();
  return {
    props: {year} 
  }
}