import styled from 'styled-components';

export const StyledContainer = styled.div`
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

export const StyledLoading = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledIntro = styled.div`
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

export const StyledLanguage = styled.div`
  position: fixed;
  top: 5px;
  right: 25px;
  z-index: 1000;

  button {
    cursor: pointer;
    padding: 0 6px;
    font-size: .75rem;
    border: none;
    margin: 0 2px;
    color: black;
    border-radius: 4px;

    &.active {
      background: var(--purple-900);
      color: white;
      font-weight: bold;
    }
  }
`