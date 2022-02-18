import styled from 'styled-components';

export const WrapperModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: ${(props) => (props.background ? '#21212180' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: var(--white);
  box-shadow: 0px 3px 6px #00000029;
  color: var(--black);
  border-radius: 4px;
  padding: 24px;
  font-size: 16px;
  margin: 0 16px;
  width: ${(props) => (props.definedWidth ? '540px' : 'auto')};
`;

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: ${(props) => (props.title24 ? '24px' : '34px')};
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin-right: 27px;
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  > button {
    display: ${(props) => (props.DNone ? 'none' : 'flex')};
  }
`;
