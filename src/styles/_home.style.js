import styled from 'styled-components';
import { blue } from "@ant-design/colors";
import { Typography } from "antd";
const { Text, Title } = Typography;

export const StyledContainer = styled.section`
  font: 400 1rem "Fira Code", sans-serif;
  width: 100%;
  height: var(--screen-height);
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

  .social-media {
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    padding: 1.25rem 3.125rem;
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
    background: linear-gradient(115deg, rgba(255,255,255,0) 80%, rgba(0, 17, 255, .3) 100%);
    opacity: 0;
    animation: fade 1s linear forwards;
    animation-delay: .2s;
  }
 
  @keyframes fade {
    100% { opacity: 1;}
  }
`
export const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    height: 40%;
  }
`
export const StyledBox = styled.div`

  .title {
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    height: 60%;
  }

`
export const StyledText = styled(Text)`
  color: ${props => props.theme.colors.text};
`
export const StyledImageWrapper = styled.div`
  display: none;
  img {
    clip-path: circle(49%);
  }

  @media (min-width: 768px) {
    display: initial;

    width: 200px;
  }

  @media (min-width: 1024px) {
    width: 300px;
  }
`
export const StyledIcon = styled.div`
  svg {
    font-size: 22px;
    color: ${blue.primary}
  }
`
export const StyledHobbieCards = styled.section`
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 1024px) {
    gap: 2rem;
    justify-content: initial;
  }
`
export const StyledHobbieCard = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  gap: 1rem;
  border: 1px solid ${blue[2]};
  padding: 1rem;

  @media (min-width: 600px) {
    max-width: calc(50% - 1rem);
    width: calc(50% - 1rem);
  }

  @media (min-width: 1024px) {
    width: 30%;
    max-width: 30%;
  }
`
export const StyledCareerWrapper = styled.section`
  max-width: 600px;
  padding-top: 1rem;
  .ant-timeline-item-tail {
    border-left: 2px solid ${blue[5]};
  }
  .ant-timeline-item-head-custom {
    background: transparent;
  }

  .ant-timeline-item-content {}
`