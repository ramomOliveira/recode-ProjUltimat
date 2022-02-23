import styled from 'styled-components';

export const WrapperListEvents = styled.div`
  border: 1px solid #BDBDBD;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #2121214d;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 30px;
  margin: 30px 0;
`;

export const WrapperHeader = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  border-bottom: 2px solid #BDBDBD;
  padding: 10px 30px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    grid-template-columns: 35% 35% 17% 13%;
  }
`;
export const WrapperMain = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  border-bottom: 1px solid #BDBDBD;
  padding: 10px 30px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 35% 35% 17% 13%;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivNone = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;