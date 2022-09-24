import React from 'react'
import styled from 'styled-components'

const Loading = ({...props}) => {
  return (
      <Wrapper>
        <Blocks style={{"--i": 1}} ></Blocks>
        <Blocks style={{"--i": 2}}></Blocks>
        <Blocks style={{"--i": 3}}></Blocks>
        <Blocks style={{"--i": 4}}></Blocks>
        <Blocks style={{"--i": 5}}></Blocks>
        <Blocks style={{"--i": 6}}></Blocks>
        <Blocks style={{"--i": 7}}></Blocks>
        <Blocks style={{"--i": 8}}></Blocks>
        <Blocks style={{"--i": 9}}></Blocks>
        <Blocks style={{"--i": 10}}></Blocks>
        <Blocks style={{"--i": 11}}></Blocks>
        <Blocks style={{"--i": 12}}></Blocks>
        <Blocks style={{"--i": 13}}></Blocks>
        <Blocks style={{"--i": 14}}></Blocks>
        <Blocks style={{"--i": 15}}></Blocks>
        <Blocks style={{"--i": 16}}></Blocks>
        <Blocks style={{"--i": 17}}></Blocks>
        <Blocks style={{"--i": 18}}></Blocks>
        <Blocks style={{"--i": 19}}></Blocks>
        <Blocks style={{"--i": 20}}></Blocks>
        <Text>Loading</Text>
      </Wrapper>
  )
}

export default Loading


const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: relative;
`

const Blocks = styled.div`
  position: absolute;
  background: #a0c0f8;
  width: 8px;
  height: 20px;
  border-radius: 4px;
  left: 50%;
  transform: rotate(calc(18deg * var(--i)));
  transform-origin: 0 100px;
  animation: light 1.9s linear infinite;
  animation-delay: calc(0.05s * var(--i));

  &:first-of-type {
    animation-delay: 0;
  }

  @keyframes light {
    0%, 50% {
      background: #a0c0f8;
      box-shadow: none;
    }

    50.1%, 100% {
      background: #1890ff;
      box-shadow: 0 0 5px #1890ff, 
                  0 0 15px #1890ff, 
                  0 0 30px #1890ff, 
    }
  }
`
const Text = styled.h3`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: .5px;

  animation: animateText 1s ease-in-out infinite;
  animation-delay: -1s;
  @keyframes animateText {
    0%, 50% {
      color: #a0c0f8;
      text-shadow: none;
    }

    50.1%, 100% {
      color: #1890ff;
    }
  }
`