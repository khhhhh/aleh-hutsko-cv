import MainPage from './MainPage'

export default function Home({year, experience}) {
  return (
    <>
    <MainPage year={year} experience={experience}/>
    </>
  )
}

export async function getServerSideProps() {

  let today = new Date().getUTCFullYear();

  let firstDayAtZeto = Date.now() - new Date('2021/08/30');
  let exp = new Date(firstDayAtZeto).getFullYear() - 1970;

  return {
    props: { year:today, experience:exp}
  }
}