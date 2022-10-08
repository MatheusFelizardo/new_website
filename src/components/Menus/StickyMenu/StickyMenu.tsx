import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import styled from 'styled-components'
import { notification } from 'antd';
import useLanguage from '../../../hooks/useLanguage';

const Logo = () => {
  return (
    <svg id="logo-75" viewBox="0 0 186 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M59.0372 2.72868C59.0372 1.33929 60.1758 0.212959 61.5805 0.212959H66.0111C67.0108 0.212959 67.9797 0.555658 68.7527 1.18272L70.1005 2.276L70.1342 2.30641C70.1653 2.29603 70.1964 2.28589 70.2276 2.276C72.6592 1.50561 75.6094 1.3591 78.6205 1.3591C81.6316 1.3591 84.5818 1.50561 87.0134 2.276C87.0446 2.28589 87.0757 2.29603 87.1068 2.30641L87.1405 2.276L88.4883 1.18272C89.2613 0.555658 90.2302 0.212959 91.2299 0.212959H95.6605C97.0652 0.212959 98.2038 1.33929 98.2038 2.72868V4.28386C98.2038 5.48711 97.6914 6.6347 96.7922 7.4451L95.7049 8.42509C95.1741 8.90351 94.537 9.25169 93.845 9.44151L93.5878 9.51207C94.5953 11.89 95.1519 14.4318 95.1519 16.488C95.1519 24.7594 89.978 28.3317 85.4192 31.4793C81.8291 33.9581 78.6205 36.1734 78.6205 40.213C78.6205 36.1734 75.4119 33.9581 71.8218 31.4793C67.263 28.3317 62.0891 24.7594 62.0891 16.488C62.0891 14.4318 62.6457 11.89 63.6532 9.51207L63.396 9.44151C62.704 9.25169 62.0669 8.90351 61.5361 8.42509L60.4488 7.4451C59.5496 6.6347 59.0372 5.48711 59.0372 4.28386V2.72868ZM81.9268 23.2502C81.9268 23.6454 81.7526 24.0243 81.4426 24.3038C81.1326 24.5832 80.7121 24.7402 80.2736 24.7402C79.8951 24.7402 79.5299 24.6231 79.2377 24.4113C79.7351 25.7283 81.008 26.9762 82.9441 24.9694C84.6533 23.1047 82.8681 19.1718 81.1289 16.838C80.5492 16.0601 79.5975 15.6857 78.6205 15.6857C77.6435 15.6857 76.6918 16.0601 76.1121 16.838C74.3729 19.1718 72.5877 23.1047 74.2969 24.9694C76.233 26.9762 77.5059 25.7283 78.0033 24.4113C77.7111 24.6231 77.3459 24.7402 76.9674 24.7402C76.5289 24.7402 76.1084 24.5832 75.7984 24.3038C75.4884 24.0243 75.3142 23.6454 75.3142 23.2502H81.9268ZM72.2898 11.6081H67.6844L71.3139 14.4828C72.1126 15.1153 73.28 14.9131 73.7742 14.0566C74.3982 12.9752 73.5694 11.6081 72.2898 11.6081ZM84.9512 11.6081H89.5566L85.9271 14.4828C85.1284 15.1153 83.961 14.9131 83.4668 14.0566C82.8428 12.9752 83.6716 11.6081 84.9512 11.6081Z" fill="var(--blue-500)"></path><path className="ccustom" d="M103.69 28.5463H107.77V13.1563H103.69V28.5463ZM103.69 10.7563H107.77V7.09629H103.69V10.7563Z" fill="#355030"></path><path className="ccustom" d="M110.399 33.5863H114.479V26.8063H114.539C115.409 28.1263 116.819 28.9963 118.979 28.9963C122.939 28.9963 125.639 25.8463 125.639 20.8663C125.639 16.0663 123.029 12.7363 118.949 12.7363C116.849 12.7363 115.409 13.7263 114.419 15.0763H114.329V13.1563H110.399V33.5863ZM118.109 25.6063C115.679 25.6063 114.389 23.7763 114.389 20.9863C114.389 18.2263 115.409 16.0363 117.959 16.0363C120.479 16.0363 121.499 18.0763 121.499 20.9863C121.499 23.8963 120.179 25.6063 118.109 25.6063Z" fill="#355030"></path><path className="ccustom" d="M133.778 28.9963C137.618 28.9963 140.258 27.1363 140.258 24.0463C140.258 20.4463 137.408 19.7263 134.828 19.1863C132.638 18.7363 130.598 18.6163 130.598 17.2963C130.598 16.1863 131.648 15.5863 133.238 15.5863C134.978 15.5863 136.028 16.1863 136.208 17.8363H139.898C139.598 14.7463 137.348 12.7363 133.298 12.7363C129.788 12.7363 127.028 14.3263 127.028 17.6563C127.028 21.0163 129.728 21.7663 132.488 22.3063C134.588 22.7263 136.538 22.8763 136.538 24.3463C136.538 25.4263 135.518 26.1163 133.718 26.1163C131.888 26.1163 130.628 25.3363 130.358 23.5663H126.578C126.818 26.8363 129.308 28.9963 133.778 28.9963Z" fill="#355030"></path><path className="ccustom" d="M155.749 28.5463V13.1563H151.669V22.0363C151.669 24.0763 150.499 25.5163 148.579 25.5163C146.839 25.5163 146.029 24.5263 146.029 22.7263V13.1563H141.979V23.4163C141.979 26.7763 143.899 28.9663 147.319 28.9663C149.479 28.9663 150.679 28.1563 151.729 26.7463H151.819V28.5463H155.749Z" fill="#355030"></path><path className="ccustom" d="M158.388 28.5463H162.468V19.6063C162.468 17.5663 163.578 16.2463 165.228 16.2463C166.728 16.2463 167.598 17.1463 167.598 18.8863V28.5463H171.678V19.6063C171.678 17.5663 172.728 16.2463 174.438 16.2463C175.938 16.2463 176.808 17.1463 176.808 18.8863V28.5463H180.888V18.1963C180.888 14.8363 179.058 12.7363 175.818 12.7363C173.868 12.7363 172.248 13.7563 171.198 15.4363H171.138C170.388 13.8163 168.828 12.7363 166.878 12.7363C164.748 12.7363 163.248 13.8163 162.408 15.2263H162.318V13.1563H158.388V28.5463Z" fill="#355030"></path><path className="ccustom" d="M0.684082 28.5463H4.76408V7.09629H0.684082V28.5463Z" fill="#355030"></path><path className="ccustom" d="M14.7403 28.9963C19.5103 28.9963 22.7803 25.4563 22.7803 20.8663C22.7803 16.2763 19.5103 12.7363 14.7403 12.7363C9.97025 12.7363 6.70025 16.2763 6.70025 20.8663C6.70025 25.4563 9.97025 28.9963 14.7403 28.9963ZM14.7403 25.8763C12.2203 25.8763 10.8403 23.8663 10.8403 20.8663C10.8403 17.8663 12.2203 15.8263 14.7403 15.8263C17.2303 15.8263 18.6403 17.8663 18.6403 20.8663C18.6403 23.8663 17.2303 25.8763 14.7403 25.8763Z" fill="#355030"></path><path className="ccustom" d="M31.4568 33.7963C33.7368 33.7963 35.7168 33.2563 37.0068 32.0563C38.1468 31.0063 38.8368 29.5363 38.8368 27.3763V13.1563H34.9068V14.7763H34.8468C33.9168 13.4863 32.5068 12.7363 30.5868 12.7363C26.6868 12.7363 23.9268 15.6763 23.9268 20.2663C23.9268 24.9163 27.2868 27.6163 30.7068 27.6163C32.6568 27.6163 33.8268 26.8363 34.7268 25.8163H34.8168V27.4963C34.8168 29.5963 33.7068 30.7063 31.3968 30.7063C29.5068 30.7063 28.6368 29.9563 28.3068 28.9963H24.2568C24.6768 31.9963 27.2568 33.7963 31.4568 33.7963ZM31.3968 24.3463C29.2968 24.3463 27.9168 22.8163 27.9168 20.2063C27.9168 17.6263 29.2968 16.0063 31.3668 16.0063C33.8268 16.0063 35.0268 17.9263 35.0268 20.1763C35.0268 22.4563 33.9768 24.3463 31.3968 24.3463Z" fill="#355030"></path><path className="ccustom" d="M48.7539 28.9963C53.5239 28.9963 56.7939 25.4563 56.7939 20.8663C56.7939 16.2763 53.5239 12.7363 48.7539 12.7363C43.9839 12.7363 40.7139 16.2763 40.7139 20.8663C40.7139 25.4563 43.9839 28.9963 48.7539 28.9963ZM48.7539 25.8763C46.2339 25.8763 44.8539 23.8663 44.8539 20.8663C44.8539 17.8663 46.2339 15.8263 48.7539 15.8263C51.2439 15.8263 52.6539 17.8663 52.6539 20.8663C52.6539 23.8663 51.2439 25.8763 48.7539 25.8763Z" fill="#355030"></path><path className="ccustom" d="M180.704 9.79629C180.704 9.10593 181.263 8.54629 181.954 8.54629H184.454C185.144 8.54629 185.704 9.10593 185.704 9.79629C185.704 10.4866 185.144 11.0463 184.454 11.0463H181.954C181.263 11.0463 180.704 10.4866 180.704 9.79629Z" fill="#355030"></path>
</svg>
  )
}

const StickMenu = () => {
  const { translate } = useLanguage()
  const [position, setPositon] = useState<any>(null)
  const containerRef = useRef()
  const titleRef = useRef()
  const menuRef = useRef()

  const handleScroll = () => {
    // You can use JS to get the elements, instead of ref
    const content = document.querySelector('.content')
    const menu = document.querySelector('.main-menu')
    menu.classList.toggle('sticky', content.scrollTop > 0)
  }

  const getBlueBarPosition = () => {
    if(titleRef.current && menuRef.current) {
      const titleEl = titleRef.current as HTMLElement
      const menuEl = menuRef.current as HTMLElement

      const positionTop = titleEl.offsetTop  - menuEl.clientHeight + (titleEl.clientHeight) + 10
      const positionLeft = titleEl.offsetLeft - (titleEl.clientWidth / 4)
      const maxWidth = titleEl.clientWidth + (titleEl.clientWidth / 2)

      setPositon({
        barLeft: +positionLeft,
        barTop: +positionTop,
        maxWidth: +maxWidth
      })
    }
  }

  useLayoutEffect(()=> {
    setTimeout(getBlueBarPosition, 100)
  }, [titleRef, menuRef])

  useEffect(()=> {
    window.addEventListener('resize', getBlueBarPosition)
  }, [])

  const showMessage = () => {
    notification.open({
      message: '',
      description:
        translate('Not functional!! This will be another component.'),
    });
  };

  return (
    <Container maxWidth={position?.maxWidth} barLeft={position?.barLeft} barTop={position?.barTop} className="active" ref={containerRef} >
      
      <div className="main-menu" ref={menuRef}>
        <div className="logo">
          <Logo />
        </div>

        <nav className="menu" >
          <ul className="menu-dt">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className="menu-mobile" onClick={showMessage}>
            <BiMenu />
          </div>
        </nav>
      </div>
      
      <main className="content" onScroll={handleScroll}>
        {/* here go the page content */}
        <section>
          <h2 ref={titleRef}>Welcome to MyPage</h2>
          <p><strong>
            {translate('You will need to adjust this example using position fixed to the menu and adding the scroll event in the body or html tags')}</strong></p>
            <p><strong>{translate('I used javascript to calc the elements height but you can use px or another unit')}</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae esse in fugiat consequuntur exercitationem inventore cum aliquam similique provident, minima necessitatibus dicta aspernatur, reprehenderit quidem enim mollitia ex facere? Libero amet aut ipsum quidem exercitationem rem quaerat ducimus at doloribus.</p>

          <h2>Woow!!</h2>
          <p>lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur veniam magnam perspiciatis est libero magni laborum asperiores, eius iusto.</p>

          <h1>Finish of the content.</h1>
        </section>
      </main>

    </Container>
  )
}

export default StickMenu

interface ContainerProps {
  barTop: number
  barLeft: number
  maxWidth: number
}

const Container = styled.div<ContainerProps>`
  max-height: 450px; 
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  opacity: 0;
  transition: opacity 1s; 
  
  &.active {
    opacity: 1;
  }


  .main-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    position: relative;
    padding: 1rem;

    &:after {
      content: '';
      width: 100%;
      height: 2px;
      background: var(--blue-500);
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1;
      transform: translate(${props => props.barLeft}px, ${props => props.barTop}px);
      max-width: ${props => props.maxWidth}px;
      transition: .4s;
    }

    .logo {
      max-width: 280px;
      transition: .6s;
      svg {
        transition: .6s;
        width: 100%;
        transform: translate(${props => props.barLeft}px, ${props => props.barTop - 50}px);
        z-index: 2;
      }
    }

    .menu {
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        a {
          position: relative;
          padding-bottom: 5px;
          &:after {
            content: '';
            width: 100%;
            max-width: 0px;
            transition: all .4s;
            height: 2px;
            background: var(--blue-500);
            position: absolute;
            left: 0;
            bottom: 0;
          }

          &:hover {
            &:after {
              max-width: 100%;
            }
          }
        }
      }

      .menu-mobile {
        display: initial;

        svg {
          font-size: 2rem;
          cursor: pointer;
        }
        @media (min-width: 600px) {
          display: none;
        }
      }

      .menu-dt {
        display: none;
        @media (min-width: 600px) {
          display: flex;
        }
      }
    }

 


    &.sticky {
      .logo {
        max-width: 180px;
        svg {
          width: 100%;
          transform: translate(0, 0);
        }
      }

      &:after {
        transform: translate(0, 0);
        max-width: 100%;
      }
    }

  }


  .content {
    max-height: 250px; 
    overflow-y: scroll;
    section {
      height: 600px;
      max-width: 60%;
      margin: 120px auto;

      h2 {
        text-align: center;
        width: fit-content;
        margin: 0 auto 20px;
        white-space: nowrap;
      }

      p {
        text-align: center;
      }
    }
  }
`
