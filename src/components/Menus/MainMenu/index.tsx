import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Tabs, Menu, Layout, notification } from 'antd';
import useMobileDetect from '../../../hooks/useMobileDetect';
import useLanguage from '../../../hooks/useLanguage';
const { Sider, Content } = Layout;
import { UserOutlined, FileOutlined, SettingOutlined, CodeOutlined, QrcodeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import Link from 'next/link';

const MainMenu = ({loading, setLoading, setSelectedKey, selectedKey}) => {
  const isMobile = useMobileDetect()
  const { language, translate, setLanguage } = useLanguage()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const updatedCurrent = ({key, item}) => {
    if (item.props.url) {
      setSelectedKey(key)
      router.push(item.props.url)
    }
  }

  const changeLanguage = (language: string) => {
    const currentLanguage = localStorage.getItem('language')
    if (currentLanguage === language) return

    setLanguage(language)
    localStorage.setItem('language', language);
    setLoading(true)
    return
  }

  const items = [
    {label: <Link href="/">{translate('About me')}</Link>, key: '1', icon: <UserOutlined /> }, 
    {label: <Link href="/projects">{translate('Projects')}</Link>, key: '2', icon: <CodeOutlined /> },
    {label: <Link href="/components">{translate('Components')}</Link>, key: '9', icon: <QrcodeOutlined /> },
    {label: translate('Resume'), key: '6', icon: <FileOutlined />, children: [
    {label: <a download href="/documents/matheus-resume-en.pdf">{translate('In English')}</a>, key: '7'}, 
    {label: <a download href="/documents/matheus-curriculum-ptBr.pdf">{translate('In Portuguese')}</a>, key: '8'}] },
    {label: translate('Language'), key: '3', icon:  <SettingOutlined />, children: [
    {label: <div onClick={()=> changeLanguage('en')}>{translate('English')}</div>, key: '4'}, 
    {label: <div onClick={()=> changeLanguage('pt-Br')}>{translate('Portuguese')}</div>, key: '5'}] }
  ]

 

  useEffect(()=> {
    if (isMobile) {
      setCollapsed(true)
    }
  }, [isMobile])


  return (
    <Sider
      collapsible 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        defaultSelectedKeys={[selectedKey]}
        defaultOpenKeys={['sub1']}
        mode="vertical"
        theme="dark"
        items={items}
        triggerSubMenuAction={isMobile ? 'click' : 'hover'}
        selectedKeys={[selectedKey]}
      />
    </Sider>
  )
}

export default MainMenu


const Container = styled.div`
  height: var(--screen-height);
  width: 100vw;
  display: flex;
  
  aside {
    max-height: var(--screen-height);
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
