import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Tabs, Menu, Layout, notification, MenuTheme } from 'antd';
import useMobileDetect from '../../../hooks/useMobileDetect';
import useLanguage from '../../../hooks/useLanguage';
const { Sider, Content } = Layout;
import { UserOutlined, FileOutlined, SettingOutlined, CodeOutlined, QrcodeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useTheme } from '../../../contexts/ThemeContext';
import { SiderTheme } from 'antd/lib/layout/Sider';
import { MdOutlineWbSunny, MdDarkMode } from 'react-icons/md'
import Icon from '@ant-design/icons';

const MainMenu = ({loading, setLoading, setSelectedKey, selectedKey}) => {
  const isMobile = useMobileDetect()
  const { language, translate, setLanguage } = useLanguage()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const {theme, toggleTheme} = useTheme();
  
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
    {label: <div onClick={()=> changeLanguage('pt-Br')}>{translate('Portuguese')}</div>, key: '5'}] },
    {label: <span>{theme.name === 'light' ? translate('Light Mode') : translate('Dark Mode')}</span>, 
    key: '10', 
    icon: theme.name === 'light' ? <Icon component={MdDarkMode} style={{color: 'black'}} /> : 
    <Icon component={MdOutlineWbSunny} style={{color: 'white'}} />, 
    onClick: ()=> toggleTheme()
    }
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
      theme={theme.name as SiderTheme}
    >
      <Menu
        defaultSelectedKeys={[selectedKey]}
        defaultOpenKeys={['sub1']}
        mode="vertical"
        theme={theme.name as MenuTheme}
        items={items}
        triggerSubMenuAction={isMobile ? 'click' : 'hover'}
        selectedKeys={[selectedKey]}
      />
      

    </Sider>
  )
}

export default MainMenu

const Loading = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
