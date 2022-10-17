import React, { useState, useRef, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import useLanguage from '../../hooks/useLanguage'

const BLOCK_TIME = 600 // Time that is blocked to switch the tab with the scroll.

const Tabs = () => {
  const containerRef = useRef()
  const [activeTab, setActiveTab] = useState(0)
  const [isBlocked, setIsBlocked] = useState(false)
  const { translate } = useLanguage()

  // You can replace the "FakeContent" for a real component, like <MyChart> for example
  // And you can also add more than 3 tabs, probably will need some adjustment in CSS for the mobile, but the functionality will work.
  const items = [
    {title: 'Tab1', content: (
      <FakeContent>
        <p>{translate('First tab active')}</p>
        <p>{translate('Scroll or click in the tab to switch the selected one.')}</p>
        <div className="footer">
          <p>{translate('The scroll only works if you are inside the purple container because I selected the "containerRef" to add the mousewheel event.')}</p>
        </div>
      </FakeContent>
      )
    },
    {title: 'Tab2', content: <FakeContent>{translate('Second tab active')}</FakeContent>},
    {title: 'Tab3', content: <FakeContent>{translate('Third tab active')}</FakeContent>}
  ]


  const changeTab = useCallback((e) => {
    if (e.wheelDeltaY === 0 || isBlocked ) return

    if (e.wheelDeltaY < 0) {
      // Scroll to bottom
      if (activeTab === items.length - 1) {
        return
      }

      setActiveTab(activeTab + 1)
      setIsBlocked(true)

      return
    } 
    
    // Scroll to top
    if( activeTab === 0 ) {
      return
    }

    setActiveTab(activeTab - 1)
    setIsBlocked(true)
  }, [activeTab, isBlocked])

  useEffect(() => {
    const element = containerRef?.current as HTMLElement
    if (!element) return

    const timer = setTimeout(()=> {
      setIsBlocked(false)
    }, BLOCK_TIME)
    element.addEventListener('mousewheel', changeTab)

    return () => {
      element.removeEventListener('mousewheel', changeTab)
      clearTimeout(timer)
    }
  }, [containerRef, activeTab, isBlocked])
  
  return (
    <>
    <Container ref={containerRef}>
      {/* Displays the tabs */}
      <TabHeader>
        {items.map((item, index) => (
          <TabItem 
            key={item.title + index} 
            active={activeTab === index}
            onClick={()=> setActiveTab(index)}
          >
            {item.title}
          </TabItem>
        ))}
      </TabHeader>

      {/* Displays the tab body */}
      <TabBody>
      {items.map((item, index) => (
          <TabContent 
            key={item.title + index} 
            active={activeTab === index}
          >
            {item.content}
          </TabContent>
        ))}
      </TabBody>

      
    </Container>
    <Footer>
    {translate('If you want to add the mousewheel event to the whole page, replace "element.addEventListener/removeEventListener" to "element.addEventListener/removeEventListener" inside the useEffect.')}
    </Footer>
    </>
  )
}

export default Tabs

const Container = styled.div`
  width: 100%;
  background: #578df0;
`

const TabHeader = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`

// If uses typescript
interface TabItemProps {
  active: boolean
}

const TabItem = styled.li<TabItemProps>`
  background: ${props => props.active ? '#ed6969' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  transition: all .3s;
  padding: .2rem 1rem;
  cursor: pointer;
  font-weight: 600;
`

const TabBody = styled.div`
`
interface TabContentProps {
  active: boolean
}
const TabContent = styled.div<TabContentProps>`
  opacity: ${props => props.active ? '1' : '0'};
  position: ${props => props.active ? 'initial' : 'absolute'};
  transform: ${props => props.active ? 'translateX(0)' : 'translateX(-100vw)'};
  transition: opacity 1s linear;
`

const Footer = styled.div`
  margin-top: 1rem;
`

const FakeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: white;

  p {
    text-align: center;
  }
  .footer {
    padding: 1rem 3rem;
    text-align: center;
    p {
      margin-bottom: 0;
      font-weight: bold;
    }
  }
`