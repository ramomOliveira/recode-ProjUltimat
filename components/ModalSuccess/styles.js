import styled from "styled-components";

export const WrapperModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  
`;

export const Container = styled.div`
  background-color: var(--black);
  color: var(--orange);
  border-radius: 4px;
  padding: 19px 48px;
  margin: 64px 0 ;
  height: 57px;
  display: flex;
`;

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;

  > span {
    margin-right: 10px;
  }
  
  > h1 {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-right: 30px;

    @media (min-width: 768px){
      margin-right: 12rem;
  }
  }

  > button {
    background-color: transparent;
    color: var(--white);
  }

`;
