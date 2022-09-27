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
import { CustomThemeProvider } from '../contexts/ThemeContext';
const { Content } = Layout;

export interface PageProps {
  setSelectedKey: (x: string) => void
}

NProgress.configure({ parent: "#np-content", easing: 'ease', speed: 500 });
Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => { NProgress.done(); })
Router.events.on('routeChangeError', () => { NProgress.done(); })

function MyApp({ Component, pageProps }: AppProps) {
  const { language, translate, setLanguage } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [selectedKey, setSelectedKey] = useState(null)

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
    <Container >
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
