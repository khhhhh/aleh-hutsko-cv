import MainPage from './MainPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home({year, experience}) {
  return (
    <>
    <MainPage year={year} experience={experience}/>
    </>
  )
}


export async function getServerSideProps({locale}) {

  let today = new Date().getUTCFullYear();

  let firstDayAtZeto = Date.now() - new Date('2021/08/30');
  let exp = new Date(firstDayAtZeto).getFullYear() - 1970;
  return {
    props: { ...(await serverSideTranslations(locale, ['common'], null, ['en', 'ru', 'pl'])), year:today, experience:exp}
  }
}