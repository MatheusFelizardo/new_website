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
          <title>{`${translate("Components")} | ${translate("Matheus Felizardo - Front-end developer")}`}</title>
      </Head>
    
      < Components />
    </>
  )
}

export default PageComponent