import React, { useState } from 'react'
import styled from 'styled-components'
import useLanguage from '../../hooks/useLanguage'
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import { components } from './utils/components-list'

interface ComponentProps {
  title: string
  description: string
  path: string
  element: JSX.Element
}

const Cat = () => {
  return (
    <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.30608 18.1614C7.73901 18.1614 7.17195 18.1614 6.60488 18.1614C6.35447 18.1614 6.08164 18.1924 5.83394 18.1512C5.6072 18.1134 5.41005 17.9813 5.18635 17.9276C4.64087 17.7967 4.37428 17.0247 4.09676 16.6247C3.869 16.2965 3.74136 15.9185 3.54168 15.5737C3.43203 15.3843 3.32512 15.0987 3.15107 14.9595C2.9205 14.775 2.72816 14.5997 2.41097 14.5997C2.16256 14.5997 1.91415 14.5997 1.66573 14.5997C1.46391 14.5997 1.30385 14.7405 1.1158 14.7847C0.935563 14.8271 0.983909 14.9082 1.13636 14.9698C1.3186 15.0434 1.59836 15.2428 1.70685 15.4092C1.78967 15.5362 1.81014 15.7293 1.85076 15.8743C1.91695 16.1107 2.02265 16.3219 2.07176 16.563C2.17088 17.0496 2.63046 17.4063 2.91979 17.776C3.16868 18.094 3.34179 18.6112 3.66246 18.8579C3.94258 19.0733 4.20835 19.2767 4.46681 19.5234C4.58806 19.6392 4.8134 19.7042 4.97306 19.7521C5.13025 19.7993 5.28387 19.9507 5.43819 19.9654C5.73028 19.9933 6.04627 20.1484 6.32734 20.2327C6.6185 20.32 6.93177 20.2892 7.23191 20.2892C7.45124 20.2892 7.66566 20.3355 7.88978 20.3355" stroke="var(--blue-500)" className="tail" strokeLinecap="round"/>
      <path d="M8.53735 17.9302C8.53735 17.5513 8.6243 17.0875 8.85087 16.7738C8.93364 16.6591 9.05188 16.4791 9.09243 16.3574" stroke="var(--blue-500)" strokeLinecap="round"/>
      <path d="M14.664 16.4061C14.8594 16.8186 15.0031 17.2925 15.2226 17.6875C15.3643 17.9426 15.2554 18.5179 15.2554 18.8046C15.2554 19.1757 15.2554 19.5469 15.2554 19.918C15.2554 20.3119 15.3245 20.5454 15.4197 20.9074C15.553 21.4139 15.4666 22.0895 15.8468 22.5173C16.0251 22.7178 15.9416 23.1743 16.1243 23.3058C16.371 23.4834 16.4729 23.6266 16.7668 23.7001" stroke="var(--blue-500)" strokeLinecap="round"/>
      <path className="head" d="M8.42148 16.2747C7.62554 15.8325 6.6486 15.9545 5.83319 15.5154C5.21837 15.1843 4.62226 14.79 4.14295 14.3107C3.97281 14.1405 3.81886 14.0776 3.67567 13.858C3.52793 13.6315 3.30979 13.4653 3.17919 13.2228C2.9039 12.7115 2.6469 12.219 2.44906 11.6749C2.14865 10.8488 2.0475 9.92306 2.0475 9.05015C2.0475 8.65015 2.03841 8.24899 2.0475 7.84909C2.05486 7.52502 2.05964 7.05773 2.14606 6.7466C2.27507 6.2822 2.45987 5.62903 2.93095 5.49444C3.00512 5.47325 2.99571 5.3724 3.09888 5.36667C3.20243 5.36092 3.31567 5.38351 3.39823 5.30096C3.64069 5.05849 3.42043 4.61789 3.32886 4.3737C3.10731 3.78289 3.03316 3.08839 3.03316 2.46443C3.03316 2.15682 3.14759 1.91007 3.16459 1.62113C3.17495 1.44492 3.38737 1.41637 3.43108 1.26337C3.5667 0.788701 5.00432 1.28909 5.23084 1.39479C5.9912 1.74963 6.7477 2.11478 7.50517 2.44617C8.35348 2.81731 9.08055 1.96602 9.90363 1.88763C10.5408 1.82695 11.1593 1.75256 11.8056 1.75256C12.0794 1.75256 12.3532 1.75256 12.627 1.75256C12.7572 1.75256 12.8874 1.75256 13.0176 1.75256C13.1819 1.75256 13.2838 1.88398 13.452 1.88398C13.7203 1.88398 14.0918 1.8191 14.3501 1.89858C14.5959 1.9742 14.8136 2.09203 15.062 2.15412C15.1993 2.18845 15.4347 2.37152 15.584 2.44617C16.0061 2.65722 16.0054 2.31523 16.3214 2.08111C16.562 1.90288 16.7377 1.73222 16.9968 1.58828C17.1545 1.50067 17.3341 1.4785 17.4896 1.4094C17.8826 1.23475 18.2154 1.02973 18.6724 1.02973C19.0082 1.02973 19.8287 0.853698 19.8552 1.35829C19.9118 2.43267 19.9866 3.51162 19.9866 4.59274C19.9866 4.74942 20.0111 4.84646 20.1181 4.96875C20.2775 5.15099 20.2445 5.37884 20.3444 5.59301C20.4475 5.81399 20.7545 5.97686 20.7752 6.23552C20.7927 6.45474 21.0917 6.7714 21.2023 6.98024C21.3343 7.22962 21.5402 7.51628 21.5637 7.79798C21.5833 8.0331 21.7197 8.41899 21.7937 8.65588C21.8901 8.9643 21.8266 9.35356 21.8266 9.6744C21.8266 10.2082 21.8918 10.8446 21.6805 11.3464C21.4241 11.9554 21.1307 12.5605 20.8409 13.1571C20.6667 13.5156 20.4263 13.8871 20.0524 14.1209C19.8791 14.2291 19.693 14.4396 19.5595 14.6027C19.3998 14.798 19.0471 14.9485 18.9499 15.143C18.8517 15.3394 18.4445 15.4959 18.2489 15.5848C18.1377 15.6353 18.1366 15.7609 18.0153 15.8001C17.8806 15.8437 17.7415 15.89 17.6064 15.9316C17.3753 16.0027 17.0885 16.0107 16.869 16.1104C16.6149 16.226 16.3027 16.0794 16.044 16.1944C15.6765 16.3578 15.217 16.1625 14.8612 16.3404" stroke="var(--blue-500)" strokeLinecap="round"/>
      <path d="M7.751 20.5668C7.91912 20.5854 7.94871 23.1205 7.70474 23.5272" stroke="var(--blue-500)" strokeLinecap="round"/>
    </svg>
  )
}

const Components = () => {
  const { translate, language } = useLanguage()
  const [visible, setVisible] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<ComponentProps>(null);
  const github_components_folder_url = `https://github.com/MatheusFelizardo/my-components/blob/main`
  
  const openModal = (component: ComponentProps) => {
    setSelectedComponent(component)
    setVisible(true)
  }

  return (
    <Container>
      <h2>{translate('This page contains some components created with React and CSS to study')}</h2>

      <Wrapper>
        {components.map((component, index) => (
          <Button key={component.title + index} onClick={()=> openModal(component)} type="primary">{translate(component.title)}</Button>
        ))}
      </Wrapper>

      {selectedComponent && (
        <ComponentsModal
          title={translate(selectedComponent.title)}
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={'fit-content'}
          style={{minWidth: '50%'}}
          footer={null}
          destroyOnClose={true}
        >
          <p>{translate(selectedComponent.description)}</p>
          {selectedComponent.element}
          <div className="link">
            <a target="_blank" href={`${github_components_folder_url}/${selectedComponent.path}`}>
              {translate("See in the Github")}
              <Cat />
            </a>       
          </div>
        </ComponentsModal>
      )}
    <Overlay />
  </Container>
  )
}

export default Components

const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  max-height: var(--screen-height);
  overflow-y: auto;
  opacity: 0;
  animation: fade 1s linear forwards;

  h2 {
    font-size: 1.125rem;
    animation: fade 1s linear;
  }
  
  .icon {
    svg {
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 1.25rem 3.125rem;
    padding-top: 10vmin;
  }

`

const Wrapper = styled.div`
  animation: fade 1s linear;

  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`

const ComponentsModal = styled(Modal)`
  .ant-modal-content {
    
  }
  .ant-modal-header {
    .ant-modal-title {

    }
  }

  .ant-modal-body {
    padding-bottom: 2rem;
    > p {
      margin-bottom: 3rem;
    }

    .link {
    margin-top: 30px;
    a {
      position: relative;
      padding-bottom: 2px;
      &:before {
        transition: width 1s;
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 10%;
        height: 2px;
        background: var(--blue-500);
       }
       &:hover {
          svg { 
            .head {
              animation: head 1s;
            }

            .tail {
              animation: tail 1s;
            }
          }

          &:before {
            width: 100%;
          }
        }

    }

    svg { 
      margin-left: 5px;
    }

   
    @keyframes head {
      0% {
        transform: translateX(1px);
      }
      50% {
        transform: translateX(-1px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes tail {
      0% {
        transform: translateY(1px);
      }
      50% {
        transform: translateY(-1px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  }

`

const Overlay = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background: linear-gradient(115deg, rgba(255,255,255,0) 80%, rgba(232, 68, 3, 0.5) 100%);
    opacity: 0;
    animation: fade 1s linear forwards;
  }
 
  @keyframes fade {
    100% { opacity: 1;}
  }
`