import React from 'react'
import styled from 'styled-components'

const Illuminated = () => {
  const text = "Matheus Felizardo"
  const text2 = "front-end developer"
  const splitedText = text.split("")
  const splitedText2 = text2.split("")

  return (
    <Container>
      <Text className="__is-name" >
        {splitedText.map((letter, index) => (
          <span className="__is-name" key={index} style={{["--i" as any]:index}}>{letter}</span>
        ))}
      </Text>

      <Text className="__is-role" >
        {splitedText2.map((letter, index) => (
          <span key={index} style={{["--i" as any]:index}}>{letter}</span>
        ))}
      </Text>
    </Container>
  )
}

export default Illuminated

const Container = styled.div`
  background: #000;
  padding: 1rem;
`

const Text = styled.p`
  margin-bottom: 0;
  font-size: max(18px, 5vmin);
  color: #444;
  letter-spacing: .5vmin;
  font-weight: 900;
  
  &.__is-name {
    text-transform: uppercase;
    text-align: center;
  }

  &.__is-role { 
    letter-spacing: 0;
    font-size: max(12px, 2.5vmin);
    text-align: right;
  }

  span {
    animation: light 3s linear infinite;
    animation-delay: calc( var(--i) * .1s);
   
    @keyframes light {
      0%, 100% {
        color: #ffffff;
        filter: blur(2px);
        text-shadow: 0 0 10px #00b3ff,
                    0 0 20px #00b3ff,
                    0 0 40px #00b3ff,
                    0 0 80px #00b3ff,
                    0 0 120px #00b3ff,
                    0 0 200px #00b3ff;
      }

      5%, 95% {
        color: #444;
        filter: blur(0);
        text-shadow: none;
      }
    }
  }
`