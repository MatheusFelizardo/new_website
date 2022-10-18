import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import NProgress from 'nprogress'
import {Router} from 'next/router'
import '../styles/global.scss';
import '../styles/nprogress.scss';
import { Layout, notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import useLanguage from '../hooks/useLanguage'
import MainMenu from '../components/Menus/MainMenu';
import styled from 'styled-components';
import { CustomThemeProvider, useTheme } from '../contexts/ThemeContext';
import Matheus from '/public/images/matheus.svg'
import Rodrigues from '/public/images/rodrigues.svg'
import Felizardo from '/public/images/felizardo.svg'
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
  const { language, translate, setLanguage } = useLanguage()
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
    <CustomThemeProvider>
      <Intro id="intro" className={showIntro ? 'visible' : 'hidden'}>
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
      </Intro>
      
      <Container className={initialShowContent ? 'visible' : 'hidden'}>
        <Layout>
          <MainMenu 
            setSelectedKey={setSelectedKey} 
            selectedKey={selectedKey} 
            loading={loading} 
            setLoading={setLoading} 
          />
          <Layout id="np-content" >
            <Content>
              {loading ? 
                  <Loading>
                  <Spin indicator={<LoadingOutlined />} />
                  </Loading>
                  :
                    <Component 
                      setSelectedKey={setSelectedKey} 
                      {...pageProps} 
                    />
                }
            </Content>
          </Layout>
        </Layout>
      </Container>
    </CustomThemeProvider>
  )
}

export default MyApp


const Container = styled.div`
  height: var(--screen-height);
  width: 100vw;
  display: flex;
  background: ${props => props.theme.colors.introBg};
  transition: opacity .6s;
  
  &.hidden {
    position: absolute;
    left: -100vw;
    opacity: 0;
    pointer-events: none;
  }

  &.active {
    position: initial;
    left: 0;
    opacity: 1;
    pointer-events: initial;
  }

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }

  .ant-layout-sider-collapsed {
    .switcher-container {
      justify-content: center;
    }
    .switcher {
      display: none;
    }
  }
  
  aside {
    max-height: var(--screen-height);
  }

  #np-content {
    background: ${props => props.theme.colors.background};
  }

  .ant-tabs-tab, .ant-typography, .ant-timeline-item, h2 {
    color: ${props => props.theme.colors.text};
  }

  .ant-tabs-nav {
    &:before {
      border-bottom-color: ${props => props.theme.name === "light" && '#96c8f6'};
    }
  }

  @media (max-width: 450px) {
    aside {
      flex: 0 0 140px !important;
      max-width: 140px !important;
      min-width: 140px !important;
      width: 140px !important;
    
      .ant-layout-sider-trigger {
        width: 135px !important;
      }
    }

    aside.ant-layout-sider-collapsed {
      flex: 0 0 40px !important;
      max-width: 40px !important;
      min-width: 40px !important;
      width: 40px !important;
    
      .ant-layout-sider-trigger {
        width: 40px !important;
      }
    }
  }
  
`

const Loading = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Intro = styled.div`

&#intro {


  width: 100%;
  height: var(--screen-height);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 20;
  background: ${props => props.theme.colors.introBg};
  overflow: hidden;
  inset: 0;
  transition: opacity 3s linear;

  &.hidden {
    inset: initial;
    pointer-events: none;
    opacity: 0;
    z-index: -1;
    /* animation: fadeOutIntro 3s linear forwards; */
    .initial-loading, .logo-wrapper {
      animation: fadeOutIntro 2s linear forwards;
    }

    .blue-left {
      animation: hideLeft 1.5s ease-in forwards;
    }
    .blue-right {
      animation: hideRight 1.5s ease-in forwards;
    }
  }

  &.active {
    position: initial;
    left: 0;
    opacity: 1;
    pointer-events: initial;
  }

  .initial-loading {
    position: absolute;
    z-index: 20;
    background: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIntro 2s linear forwards;
  }

  .logo-wrapper {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 20;
    svg {
      animation: fadeIntro 2s linear forwards;
      opacity: 0;
      max-width: 200px;
      height: 80px;
      position: absolute;
      path {
        fill: ${props => props.theme.name === 'dark' ? 'var(--blue-500)' : 'black'};
        animation: changeColor 2s linear forwards;
        animation-delay: 1s;
      }
      &:nth-of-type(1) {
        transform: translate(-30%,0);
      }

      &:nth-of-type(2) {
        transform: translate(8%,35px);
        animation-delay: .5s;
      }

      &:nth-of-type(3) {
        animation-delay: 1s;
        transform: translate(30%,70px);
      }
    }
  }

  .blue-left {
    position: absolute;
    width: 50vw;
    left: 0;
    background: ${props => props.theme.colors.background};
    height: var(--screen-height);
    z-index: 10;

    animation: showLeft 1.5s ease-in forwards;
    transform: translateX(-50vw);
  }

  .blue-right {
    position: absolute;
    width: 50vw;
    right: 0;
    background: ${props => props.theme.colors.background};
    height: var(--screen-height);
    animation: showRight 1.5s ease-in forwards;
    transform: translateX(50vw);
    z-index: 10;
  }

  @keyframes fadeIntro {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOutIntro {
    0% {
      opacity: 1;
    }

    60% {
      opacity: 0;
    }

    100% {
      position: absolute;
      left: -100vw;
    }
  }


  @keyframes changeColor {
    from {
      fill: ${props => props.theme.name === 'dark' ? 'var(--blue-500)' : 'black'};
    }
    to {
      fill: ${props => props.theme.name === 'dark' ? 'white' : 'var(--blue-500)'};
    }
  }

  @keyframes showLeft {
    from {
      transform: translateX(-50vw);
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes showRight {
    from {
     transform: translateX(50vw);
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes hideLeft {
    0% {
      transform: translateX(0);
    }

    80% {
      transform: translateX(-50vw);
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes hideRight {
    0% {
      transform: translateX(0);
    }

    80% {
     transform: translateX(50vw);
    }

    100% {
      opacity: 0;
    }
  }
}
`