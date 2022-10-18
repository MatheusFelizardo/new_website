import styled from 'styled-components';

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
    padding-top: 15vmin;
  }

`
export const StyledProjectsContainer = styled.div`
  
  display: grid;
  gap: 20px;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
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
    background: linear-gradient(115deg, rgba(255,255,255,0) 80%, rgba(0, 204, 132, 0.4) 100%);
    opacity: 0;
    animation: fade 1s linear forwards;
  }
 
  @keyframes fade {
    100% { opacity: 1;}
  }
`