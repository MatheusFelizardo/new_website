import { createGlobalStyle, css } from "styled-components";
import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --black: #333;
    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --gray-900: #121214;


    --purple-500: #B4B0FB;
    --purple-900: #a5a0fa;
    --green-500: #04FDA3;
    --cyan-500: #61dafb;
    --yellow-500: #eba417;

    --blue-500: #1890ff; 
  }

  @media(max-width:1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width:720px) {
    html {
      font-size: 87.5%;
    }
  }


  body {
    color: var(--white);
    overflow-x: hidden;
  }

  body, input, select, textarea, button {
    /* font: 400 1rem "Fira Code", sans-serif; */
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration:none
  }

  main {
    animation: fadeIn 0.5s both;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .carousel-slider {
    overflow: visible !important;
    .control-dots {
    bottom: -2rem !important;
        
    .dot.selected {
        background: var(--purple-900) !important;
      }
    }

    .control-arrow {
      background: none !important;
    }

    .control-prev.control-arrow {
      left: -5px !important;
      &::before {
        border-right: 8px solid var(--purple-500) !important; 
      }

      &:hover {
        &::before {
          border-right: 8px solid var(--purple-900) !important;
        }
      }
      }

    .control-next.control-arrow {
      &::before {
        border-left: 8px solid var(--purple-500) !important;
    }

      &:hover {
        &::before {
          border-left: 8px solid var(--purple-900) !important;
        }
      }
    }
    
  }

  .ant-tooltip {
    @media (max-width: 500px) {
      display: none !important;
    }
  }

  .ant-menu-inline-collapsed, .ant-menu-vertical {
    height: 100%;
  }

  @keyframes fade {
    0% { opacity: 0;}
    100% { opacity: 1;}
  }

  .menu-theme {
    li.ant-menu-item {
      padding: 0;
      span {
        padding: 0;
        div {
          padding: 0 16px;

          &.active {
            background-color: var(--blue-500);
          }
        }
      }
    }
  }

  .ant-layout-sider-trigger {
    position: initial;
  }

  #intro {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    inset: 0;
    background: white;
    z-index: 20;
      
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
  }


  // nprogress
    /* Make clicks pass-through */
    #nprogress {
    pointer-events: none;
  }
  
  #nprogress .bar {
    background: var(--blue-500);
  
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
  
    width: 100%;
    height: 2px;
  }
  
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px var(--blue-500), 0 0 5px var(--blue-500);
    opacity: 1.0;
  
    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }
  
  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }
  
  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
  
    border: solid 2px transparent;
    border-top-color: var(--blue-500);
    border-left-color: var(--blue-500);
    border-radius: 50%;
  
    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }
  
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
  
  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
`

export default GlobalStyle;
