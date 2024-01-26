import Head from 'next/head'
import React, { useEffect } from 'react'
import Projects from '../components/Pages/Projects'
import useLanguage from '../hooks/useLanguage'
import { PageProps } from './_app'

const PageProjects = ({ setSelectedKey }: PageProps ) => {
  const { language, translate, setLanguage } = useLanguage()

  useEffect(() => {
    setSelectedKey('2')
  }, [])

  return (
    <>
      <Head>
          <meta property="og:image" content="/images/mrf-logo.png" />
          <meta property="og:title" content="Matheus Rodrigues Felizardo | Front-end developer - Projects" />
          <meta property="og:description" content="Take a look in the projects powered by Matheus Rodrigues Felizardo | Dê uma olhada nos projetos desenvolvidos por Matheus Rodrigues Felizardo" />
          <meta property="og:url" content="https://www.matheusfelizardo.com.br/projects" />
          <meta name="description" content="Take a look in the projects powered by Matheus Rodrigues Felizardo | Dê uma olhada nos projetos desenvolvidos por Matheus Rodrigues Felizardo" />
          <title>{`${translate("Projects")} | ${translate("Matheus Felizardo - Front-end developer")}`}</title>
      </Head>
    
      < Projects />
    </>
  )
}

export default PageProjects