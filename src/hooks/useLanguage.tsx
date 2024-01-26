import React, { useEffect, useState } from 'react'
import { translations } from '../../translations'

const useLanguage = () => {
  const [language, setLanguage] = useState('')
  const [texts, setTexts] = useState(translations)

  const changeCurrentLanguage = (language: string) => {
    const currentLanguage = localStorage.getItem('language')
    if (currentLanguage === language) return

    setLanguage(language)
    localStorage.setItem('language', language);
    return
  }

  useEffect(() => {
    const currentLanguage = localStorage.getItem('language')

    if (currentLanguage) {
      setLanguage(currentLanguage)
      return
    }

    setLanguage('en')
  }, [language])

  const translate = (text: string) => {
    if (language === 'en') {
      return text
    }
    return texts[text]
  }


  return {language, setLanguage, translate, changeCurrentLanguage}
}

export default useLanguage