import styled from 'styled-components';
import { Modal } from 'antd';

export const StyledContainer = styled.section`
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

export const StyledWrapper = styled.div`
  animation: fade 1s linear;

  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`

export const StyledModal = styled(Modal)`
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
      color: #1890ff;
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

export const StyledOverlay = styled.div`
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