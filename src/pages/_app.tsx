import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import NProgress from 'nprogress'
import {Router} from 'next/router'
import GlobalStyle from '../styles/_global.style'
import { Layout, notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import useLanguage from '../hooks/useLanguage'
import MainMenu from '../components/Menus/MainMenu';
import { CustomThemeProvider, useTheme } from '../contexts/ThemeContext';
import Matheus from '/public/images/matheus.svg'
import Rodrigues from '/public/images/rodrigues.svg'
import Felizardo from '/public/images/felizardo.svg'
import { StyledContainer, StyledLoading, StyledIntro} from '../styles/_app.style'
import Head from 'next/head';
const { Content } = Layout;

export interface PageProps {
  setSelectedKey: (x: string) => void
}

NProgress.configure({ parent: "#np-content", easing: 'ease', speed: 500 });
Router?.events.on('routeChangeStart', (url) => {
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => { NProgress?.done(); })
Router.events.on('routeChangeError', () => { NProgress?.done(); })

function MyApp({ Component, pageProps }: AppProps) {
  const { language, translate } = useLanguage()
  const [showIntro, setShowIntro] = useState(true)
  const [initialShowContent, setInitialShowContent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedKey, setSelectedKey] = useState(null)
  const {theme, toggleTheme} = useTheme(); 

  useEffect(() => {
    const time = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    const time2 = setTimeout(() => {
      setInitialShowContent(true)
    }, 4500)

    return ()=> {
      clearTimeout(time)
      clearTimeout(time2)
    }
  }, [])

  useEffect(() => {
    notification.destroy()
    setLoading(true)
  }, [selectedKey])

  useEffect(()=> {
    const time = setTimeout(() => {
      setLoading(false)
    }, 500)

    return ()=> {
      clearTimeout(time)
    }
  }, [language, loading])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500;700&family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet" />

        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        
        <meta property="og:image" content="/images/mrf-logo.png" />
        <meta property="og:title" content="Matheus Rodrigues Felizardo | Front-end developer" />
        <meta property="og:description" content="Matheus Rodrigues Felizardo's personal page | Página pessoal de Matheus Rodrigues Felizardo" />
        <meta property="og:url" content="https://www.matheusfelizardo.com.br" />
        <meta name="description" content="Matheus Rodrigues Felizardo's personal page | Página pessoal de Matheus Rodrigues Felizardo" />
        <title>{`${translate("Home")} | ${translate("Matheus Felizardo - Front-end developer")}`}</title>
      </Head>
      <CustomThemeProvider>
        <GlobalStyle />
        <StyledIntro id="intro" className={showIntro ? 'visible' : 'hidden'}>
          <div className="initial-loading">
            <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
              <circle cx="50" cy="50" r="32" strokeWidth="8" stroke={theme?.name === 'dark' ? '#93dbe9' : '#0d5acd'}  strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
              </circle>
              <circle cx="50" cy="50" r="23" strokeWidth="8" stroke={theme?.name === 'dark' ? '#689cc5' : 'var(--blue-500)'} strokeDasharray="36.12831551628262 36.12831551628262" strokeDashoffset="36.12831551628262" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
              </circle>
            </svg>
          </div>
          <div className="blue-left"></div>
          <div className="blue-right"></div>
          <div className="logo-wrapper">
            <Matheus/>
            <Rodrigues/>
            <Felizardo/>
          </div>
        </StyledIntro>
        
        <StyledContainer className={initialShowContent ? 'visible' : 'hidden'}>
          <Layout>
            <MainMenu 
              selectedKey={selectedKey} 
              setLoading={setLoading} 
            />
            <Layout id="np-content" >
              <Content>
                {loading ? 
                    <StyledLoading>
                    <Spin indicator={<LoadingOutlined />} />
                    </StyledLoading>
                    :
                      <Component 
                        setSelectedKey={setSelectedKey} 
                        {...pageProps} 
                      />
                  }
              </Content>
            </Layout>
          </Layout>
        </StyledContainer>
      </CustomThemeProvider>
    </>
  )
}

export default MyApp