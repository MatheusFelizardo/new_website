import React from 'react'
import { FaLightbulb, FaMoon } from 'react-icons/fa'
import { MdOutlineWbSunny, MdDarkMode } from 'react-icons/md'
import styled from 'styled-components'
import { useTheme } from '../../contexts/ThemeContext'
import { Switch } from 'antd';

const ThemeToggle = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Container className="switcher-container">
      <Wrapper>
        {
          theme.name === 'light' ? 
          <MdDarkMode style={{color: 'black'}} onClick={toggleTheme} /> : 
          <MdOutlineWbSunny style={{color: 'white'}} onClick={toggleTheme} />
        }
      </Wrapper>
      <Switch
        className="switcher"
        checked={theme.name === 'dark'}
        onChange={toggleTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </Container>
  )
}

export default ThemeToggle

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
`

const Wrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  svg { 
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 9999;
  }
`