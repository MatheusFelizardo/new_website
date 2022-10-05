import React from 'react'
import styled from 'styled-components'

// This context controls a variable in my personal page
import { useTheme } from '../../contexts/ThemeContext'; // You can remove

// I used before and after to create the star and clouds, but it's just an idea. 
// You can use the react-icon library or another svg to create a better layout.

const DayAndNight = () => {
  const {theme, toggleTheme} = useTheme(); // You can remove

  return (
    <Container>
        <input 
          id="toggle" 
          type="checkbox" 

          // This context controls a variable in my page
          defaultChecked={theme.name === 'dark'} // You can remove
          onChange={()=> toggleTheme()} // You can remove
        />

        <label htmlFor="toggle">
          <button>
            <i /> 
          </button>
        </label>
    </Container>
  )
}

export default DayAndNight

const Container = styled.div`
  display: flex;
  justify-content: center;

  input[type='checkbox'] {
    width: 0;
    visibility: hidden;
    pointer-events: none;
    + label {
      transition: all 1s linear;
      width: 150px;
      height: 72px;
      box-shadow: 0 0 1px 1px #00000066;
      border-radius: 60px;
      background: #74b1f7;
      display: flex;
      justify-content: center;
      position: relative;
      cursor: pointer;

      &:after {
        content: '';
        width: 40px;
        height: 4px;
        position: absolute;
        background: #fff;
        border-radius: 50%;
        top: 42px;
        right: 30px;
        z-index: 2;
      }

      &:before {
        content: '';
        width: 64px;
        height: 4px;
        position: absolute;
        background: #fff;
        border-radius: 50%;
        top: 30px;
        left: 50px;
        z-index: 2;
      }

      button {
        &:before {
          content: '';
          width: 55px;
          height: 4px;
          position: absolute;
          background: #fff;
          border-radius: 50%;
          top: 16px;
          right: -50px;
          z-index: 2;
        }

        transition: all .2s linear;
        width: 72px;
        height: 72px;
        background: #f6ae1f;
        box-shadow: 0 0 1px 1px #00000066;
        border-radius: 100%;
        transform: translateX(-55%);
        border: none; 
        pointer-events: none;
      }
    }

    &:checked{
      + label {
        transition: all 1s linear;
        background: #0c51a0;

        &:after {
          content: '\u204E';
          font-size: 22px;
          width: 7px;
          height: 7px;
          color: #fff;
          background: none;
          border-radius: 0;
          top: 3px;
          left: 47px;
          z-index: 2;
        }

        &:before {
          content: '\u204E';
          font-size: 22px;
          width: 14px;
          height: 14px;
          position: absolute;
          color: #fff;
          border-radius: 0;
          background: none;
          top: 0vmin;
          left: 27.2px;
          z-index: 2;
        }

        button {
          background: #FFE5B5;
          box-shadow: 0 0 1px 1px #00000066;
          transform: translateX(55%);
          position: relative;

          &:before {
            content: '';
            width: 14px;
            height: 14px;
            font-size: 22px;
            position: absolute;
            background: rgba(183, 183, 183, 0.5);
            border-radius: 50%;
            top: 12px;
            right: 50%;
            z-index: 2;
          }

          &:after {
            content: '';
            width: 10px;
            height: 10px;
            position: absolute;
            background: rgba(183, 183, 183, 0.5);
            border-radius: 100%;
            bottom: 20px;
            left: 30px;
            z-index: 2;
          }
          
          i {
            &:after {
              content: '';
              font-size: 22px;
              width: .6vmin;
              height: .6vmin;
              position: absolute;
              background: rgba(183, 183, 183, 0.5);
              border-radius: 50%;
              top: 25px;
              right: 25%;
              z-index: 2;
            }

            &:before {
              content: '\u204E';
              font-size: 16px;
              width: 8px;
              height: 8px;
              position: absolute;
              color: #fff;
              top: 25px;
              left: -44px;
              z-index: 2;
            }
          }
        }
      }
    }    
  }

`