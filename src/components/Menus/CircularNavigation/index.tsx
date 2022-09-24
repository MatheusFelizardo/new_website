import React, { useRef } from 'react'
import styled from 'styled-components'
import { HomeOutlined, PlusOutlined, UserOutlined, GithubOutlined, TwitterOutlined, FacebookOutlined, PoweroffOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const CircularNavigation = () => {
  const menuRef = useRef(null)

  const handleClick = (e) => {
    e.preventDefault();
    menuRef.current.classList.toggle('active')
  }

  return (
    <Container ref={menuRef}>
      <div className="toggle" onClick={handleClick}>
        <PlusOutlined />
      </div>

      <li style={{"--i":0}}>
        <a href="/" target="_blank">
          <HomeOutlined />
        </a>
      </li>
      <li style={{"--i":1}}>
        <a href="https://linktr.ee/matheusfelizardo" target="_blank">
          <UserOutlined />
        </a>
      </li>
      <li style={{"--i":2}}>
        <a href="https://github.com/MatheusFelizardo" target="_blank" >
          <GithubOutlined />
        </a>
      </li>
      <li style={{"--i":3}}>
        <a href="https://twitter.com/theusfelizardo1" target="_blank" >
          <TwitterOutlined />
        </a>
      </li>
      <li style={{"--i":4}}>
        <a href="https://www.instagram.com/matheus.felizardo_/" target="_blank">
        <InstagramOutlined />
        </a>
      </li>
      <li style={{"--i":5}}>
        <a href="https://www.facebook.com/matheus.felizardo.3/" target="_blank">
          <FacebookOutlined />
        </a>
      </li>
      <li style={{"--i":6}}>
        <a href="https://www.linkedin.com/in/matheus-felizardo" target="_blank">
          <LinkedinOutlined />
        </a>
      </li>
      <li style={{"--i":7}}>
        <a href="#" onClick={handleClick}>
          <PoweroffOutlined />
        </a>
      </li>
    </Container>
  )
}

export default CircularNavigation

const Container = styled.nav`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  svg {
    font-size: 2rem;
  }

  .toggle {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    background: #1890ff;
    color: white;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 1.25s, box-shadow .2s;
    z-index: 999;
    position: absolute;

    &:hover {
        box-shadow: 0 0 5px #1890ff;
      }
  }

  li {
    position: absolute;
    list-style: none;
    left: 0;
    transform-origin: 100px;
    transition: .5s;
    transition-delay: calc(.1s * var(--i));
    transform: rotate(0deg) translateX(80px);

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: #1890ff;
      color: white;
      transform: rotate(calc(360deg / -8 * var(--i)));

      svg {
        font-size: 1.5rem;
      }

      &:hover {
        transform: rotate(calc(360deg / -8 * var(--i))) scale(1.05);
        box-shadow: 0 0 5px #1890ff;
      }
    }
  }

  &.active {

    .toggle {
      transform: rotate(315deg) ;
    }

    li {
      transform: rotate(calc(360deg / 8 * var(--i)));
    }
  }
`