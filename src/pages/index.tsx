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
          <meta property="og:image" content="/images/mrf-logo.png" />
          <meta property="og:title" content="Matheus Rodrigues Felizardo | Front-end developer" />
          <meta property="og:description" content="Matheus Rodrigues Felizardo's personal page | Página pessoal de Matheus Rodrigues Felizardo" />
          <meta property="og:url" content="https://www.matheusfelizardo.com.br" />
          <meta name="description" content="Matheus Rodrigues Felizardo's personal page | Página pessoal de Matheus Rodrigues Felizardo" />
          <title>{`${translate("Home")} | ${translate("Matheus Felizardo - Front-end developer")}`}</title>
      </Head>
    
      < Home />
    </>
  )
}

export default PageHome