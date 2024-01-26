import Head from 'next/head'
import React, { useEffect } from 'react'
import Components from '../components/Pages/Components'
import useLanguage from '../hooks/useLanguage'
import { PageProps } from './_app'

const PageComponent = ({ setSelectedKey }: PageProps) => {

  const { translate } = useLanguage()
    useEffect(() => {
      setSelectedKey('9')
    }, [])

  return (
    <>
      <Head>
        <meta property="og:image" content="/images/mrf-logo.png" />
        <meta property="og:title" content="Matheus Rodrigues Felizardo | Front-end developer - Components" />
        <meta property="og:description" content="Here you can find some components powered by Matheus Rodrigues Felizardo | Aqui você encontra alguns componentes desenvolvidos por Matheus Rodrigues Felizardo" />
        <meta property="og:url" content="https://www.matheusfelizardo.com.br/projects" />
        <meta name="description" content="Here you can find some components powered by Matheus Rodrigues Felizardo | Aqui você encontra alguns componentes desenvolvidos por Matheus Rodrigues Felizardo" />
        <title>{`${translate("Components")} | ${translate("Matheus Felizardo - Front-end developer")}`}</title>
      </Head>
    
      < Components />
    </>
  )
}

export default PageComponent