import React, { useEffect, useState } from 'react'
import useLanguage from '../../hooks/useLanguage';
import ProjectItem from '../Modal/ProjectItem';
import projects from '../../../public/documents/projects.json'
import { notification } from 'antd';
import { StyledContainer, StyledOverlay, StyledProjectsContainer } from '../../styles/_projects.style';

export default function Projects() {
  const { translate, language } = useLanguage()
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    notification.destroy()
    if(!language) return
    if (showPopup) {
      notification.open({
        placement: 'top',
        message: <span className="message">{translate('Click in the images to get informations about the project')}</span>,
      })
      setShowPopup(false)
    }
  }, [language])
  
  return (
    <>
      <StyledContainer>
        <StyledProjectsContainer>
          {projects.map((project, index) => {
            return (
              <ProjectItem key={index} project={project}/>
            )
          })}
        </StyledProjectsContainer>
        <StyledOverlay />
      </StyledContainer>
    </>
    )
}


