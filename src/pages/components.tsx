import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Components from '../components/Pages/Components'
import useLanguage from '../hooks/useLanguage'
import { PageProps } from './_app'

const PageComponent = ({ setSelectedKey }: PageProps) => {

  const { language, translate, setLanguage } = useLanguage()
    useEffect(() => {
      setSelectedKey('9')
    }, [])

  return (
    <>
      <Head>
          <title>{`${translate("Components")} | ${translate("Matheus Felizardo - Front-end developer")}`}</title>
      </Head>
    
      < Components />
    </>
  )
}

export default PageComponent