import React from 'react'
import styles from '../styles/LanguageSwitcher.module.scss'
import { i18n } from 'next-i18next'

const LanguageSwitcher = ({ selectedLang }) => {

    const [styleLangSwitch, setStyleLangSwitch] = React.useState([styles.menu]);

    function showHide() {
        if (styleLangSwitch.length > 1)
            setStyleLangSwitch([styles.menu]);
        else
            setStyleLangSwitch([styles.menushow, styles.menu].join(' '));
    }

    function changeLang(lang) { 
        i18n.changeLanguage(lang);
        showHide();
    }

    return (
        <div className={styles.langSwitcher} >
            <div className={styles.selectedLang} onClick={() => showHide()}>{selectedLang}</div>
            <div className={styleLangSwitch}>
                <span className={styles.lang} onClick={() => changeLang('en')}>EN</span>
                <span className={styles.lang} onClick={() => changeLang('pl')}>PL</span>
                <span className={styles.lang} onClick={() => changeLang('ru')}>RU</span>
                {/* <span className={styles.lang} onClick={() => changeLang('by')}>BY</span> */}
            </div>
        </div>
    )
}

export default LanguageSwitcher