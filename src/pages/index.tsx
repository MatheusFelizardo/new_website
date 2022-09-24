import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Home from '../components/Pages/Home'
import useLanguage from '../hooks/useLanguage'
import { PageProps } from './_app'


const PageHome = ({ setSelectedKey }: PageProps) => {
  const { language, translate, setLanguage } = useLanguage()

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