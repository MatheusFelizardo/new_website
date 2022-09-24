import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
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
          <title>{`${translate("Projects")} | ${translate("Matheus Felizardo - Front-end developer")}`}</title>
      </Head>
    
      < Projects />
    </>
  )
}

export default PageProjects