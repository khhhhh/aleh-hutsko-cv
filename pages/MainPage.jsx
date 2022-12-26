import React, { useEffect, useState, useTransition } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Button from '../components/Button'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import { useTranslation } from 'next-i18next';

export default function MainPage({ year, experience }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t("name-surname-cv")}</title>
        <meta name="description" content="Aleh Hutsko CV" />
      </Head>

      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.firstSec}>
            <div className={styles.picContainer}>
              <Image className={styles.profilePic} src="/images/me.jpg" width='300px' height='400px' alt="A human being" />
            </div>
            <div>
              <h1 className={styles.title}>
                {t('title')}
              </h1>
              <h2 className={styles.code} >{t('greet')}</h2>
              <a href='mailto:oleg.hutsko@gmail.com'><Button>{t('contact-me')}</Button></a>
            </div>
          </div>

          <div className={styles.secondSec}>
            <div>
              <h3 id={styles.hExperience}>
                <div>{t('work-exp')}</div>
                <div>{experience} {experience > 1 ? t('years') : t('year')}</div></h3>
              <div>
                {t('exp-desc')}
                <a href='https://zetolublin.pl/'>{t('zeto')}</a>, {t('poland')}.&nbsp;
                {t('exp-desc-2')}
              </div>
            </div>
            <div>
              <h3>{t('about-me')}</h3>
              <div>
                {t('about-me-desc')}
              </div>
            </div>
            <div>
              <h3>{t('techs')}</h3>
              <div>
                {t('techs-desc')}
                <ul className={styles.chipsWrapper}>
                  <li className={styles.chip}>ASP.NET</li>
                  <li className={styles.chip_sec}>Web Forms</li>
                  <li className={styles.chip_sec}>Win Forms</li>
                  <li className={styles.chip_sec}>C#</li>
                  <li className={styles.chip_sec}>AutoMapper</li>
                  <li className={styles.chip_sec}>AutoFac</li>
                  <li className={styles.chip_sec}>MediatR</li>
                  <li className={styles.chip_sec}>FluentValidation</li>
                  <li className={styles.chip}>Aurelia JS Framework</li>
                  <li className={styles.chip_sec}>JavaScript</li>
                  <li className={styles.chip_sec}>TypeScript</li>
                  <li className={styles.chip}>EF Core</li>
                  <li className={styles.chip_sec}>SQL</li>
                  <li className={styles.chip_sec}>Azure</li>
                  <li className={styles.chip_sec}>Git</li>
                  <li className={styles.chip_sec}>Redmine</li>
                </ul>
                {/* <div className={styles.icons}>
                  <i className="devicon-dotnetcore-plain"></i>
                  <i className="devicon-csharp-plain"></i>
                  <i className="devicon-visualstudio-plain"></i>
                  <i className="devicon-azure-plain"></i>
                  <i className="devicon-typescript-plain"></i>
                  <i className="devicon-html5-plain"></i>
                  <i className="devicon-css3-plain"></i>
                  <i className="devicon-git-plain-wordmark"></i>
                  <i className="devicon-vim-plain"></i>
                </div> */}
              </div>
            </div>
            <div>
              <h3>{t('education')}</h3>
              <table>
                <tbody>
                  <tr>
                    <td>2016 - 2019</td>
                    <td><a href='https://kbp.by/' rel="noreferrer" target="_blank">{t('kbip')}</a>, {t('minsk')}, {t('belarus')}</td>
                  </tr>
                  <tr>
                    <td>2019 - 2022</td>
                    <td><a href='https://www.umcs.pl/en/' rel="noreferrer" target="_blank">{t('umcs')}</a> {t('licen')}, {t('lublin')}, {t('poland')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3>{t('languages')}</h3>
              <table>
                <tbody>
                  <tr>
                    <td>{t('russian')}</td>
                    <td>{t('native')}</td>
                  </tr>
                  <tr>
                    <td>{t('polish')}</td>
                    <td>B1</td>
                  </tr>
                  <tr>
                    <td>{t('english')}</td>
                    <td>B1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <div className={styles.footerRodo}>{t('rodo')}</div>
          © {year} Aleh Hutsko
          </footer>
      </div>
    </>
  )
}
