import styled, { keyframes } from "styled-components";
const slideIn = keyframes`
   0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
`;
const slideInReverse = keyframes`
0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  text-align: center;
  width: auto;

  & > :nth-child(n) {
    border-right: gray;
    border-left: gray;
    border-style: solid;
    border-bottom: none;
    border-top: none;
    border-width: thin;
  }
  & > :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom: gray;
    border-bottom-style: solid;
    border-width: thin;
  }
  & > :first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top: gray;
    border-top-style: solid;
    border-width: thin;
  }

  & > :nth-child(odd) {
    animation: ${slideIn} 0.2s ease-out forwards;
  }
  & > :nth-child(even) {
    animation: ${slideInReverse} 0.2s ease-out forwards;
  }
`;
