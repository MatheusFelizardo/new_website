import React, { useEffect, useState } from 'react'
import {  Menu, Layout, MenuTheme } from 'antd';
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
import { StyledLanguage } from '../../../styles/_app.style';

interface MainMenuProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  selectedKey:any
}

const MainMenu = ({ setLoading, selectedKey}: MainMenuProps) => {
  const isMobile = useMobileDetect()
  const { language, translate, setLanguage, changeCurrentLanguage } = useLanguage()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const {theme, toggleTheme} = useTheme();
  
  const changeLanguage = (language: string) => {
    changeCurrentLanguage(language)
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
    {label: translate('Theme'), popupClassName: 'menu-theme',
    key: '10', icon: theme.name === 'light' ? <Icon component={MdOutlineWbSunny} style={{color: 'black'}} /> : 
    <Icon component={MdDarkMode} style={{color: 'white'}} />, 
    children: [
      {label: <div onClick={()=> {toggleTheme('light')}} className={theme.name === 'light' && 'active'}>{translate('Light Mode')}</div>, key: '11'}, 
      {label: <div onClick={()=> {toggleTheme('dark')}} className={theme.name === 'dark' && 'active'}>{translate('Dark Mode')}</div>, key: '12'}
    ] 
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
      <StyledLanguage>
        <button 
        onClick={() => changeLanguage('en')} 
        className={language === 'en' ? "active" : ''}>EN</button>
        <button 
        className={language !== 'en' ? "active" : ''}
        onClick={() => changeLanguage('pt-Br')}>PT</button>
      </StyledLanguage>
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