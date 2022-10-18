import Head from 'next/head'
import React, { useEffect } from 'react'
import Home from '../components/Pages/Home'
import useLanguage from '../hooks/useLanguage'
import { PageProps } from './_app'

const PageHome = ({ setSelectedKey }: PageProps) => {
  const { translate } = useLanguage()

  useEffect(() => {
    setSelectedKey('1')
  }, [])

  return (
    <>
      <Head>
          <title>{`${translate("Home")} | ${translate("Matheus Felizardo - Front-end developer")}`}</title>
      </Head>
    
      < Home />
    </>
  )
}

export default PageHome