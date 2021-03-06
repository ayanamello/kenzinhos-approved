import styled, { keyframes } from 'styled-components';
import backgroundDesktop from '../../Assets/Img/login.png';
import backgroundMobile from '../../Assets/Img/loginSignupMobile.png';

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(-100px);
  }

  to{
    opacity:1;
    transform:translateX(0px);
  }
`
const fadeIn = keyframes`
  from{
    opacity:0;
  }

  to{
    opacity:100;
  }
`

export const LogoContainerLogin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 75px;
  height: 75px;
  img {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

export const MainContainer = styled.div`
  background: url(${backgroundMobile}) round;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  animation: ${fadeIn} 1s;
  @media screen and (min-width: 600px) {
    background: url(${backgroundDesktop}) round;
    flex-direction: row;
    animation: ${appearFromLeft} 1s;
  }
`;

export const FormContainer = styled.div`
  margin-top: 70px;
  width: 85%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  form {
    width: 90%;
    height: 210px;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-family: var(--title-font);
    font-weight: 500;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    width: 70%;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 600px) {
    width: 100%;
    width: 30%;
    margin-top: 100px;

    form {
      width: 70%;
      height: 320px;
    }
    h1 {
      font-size: 3rem;
      color: black;
    }
  }
`;
export const InputContainer = styled.div`
  height: 33.33%;
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    background-color: white;
    border-radius: 10px;
  }
  @media screen and (min-width: 600px) {
    height: 20%;
  }
`;

export const TitleContainer = styled.div`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  color: white;
  text-align: center;
  h1 {
    font-size: 1.1rem;
    font-family: var(--title-font);
    font-weight: 500;
    width: 100%
  }
  a {
    margin-top: 0;
    text-transform: capitalize;
    border: none;
    padding: 0px;
    width: 0px;
    border-radius: 8px;
    color: white;
    background-color: inherit;
    font-family: var(--title-font);
    text-align: center;
    color: white;
    font-size: 1.1rem;
    width: auto;
    font-weight: 500;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color:white;
  }

  a:active{
            background: rgba(0, 0, 0, 0.8)
        }

  @media screen and (min-width: 600px) {
    text-align: start;
    flex-direction: column;
    width: 30%;
    justify-content: center;

    h1 {
      font-size: 3rem;
    }
    a {
      margin-top: 20px;
      text-transform: uppercase;
      border: 1px white solid;
      padding: 15px;
      width: 150px;
      border-radius: 8px;
      color: var(--blue-color);
      background-color: white;
      font-family: var(--title-font);
      text-align: center;
    }
  }
`;
