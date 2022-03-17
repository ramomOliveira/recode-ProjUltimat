import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 500px;
`;

export const WrapperCover = styled.div`
  background-image: ${props => `url(${props.img})`} ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
`;