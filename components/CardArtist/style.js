import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  box-shadow: 0px 3px 6px #2121214d;
  width: min-content;
`;

export const WrapperTop = styled.div`

`;

export const ImgArtist = styled.div`
  background-image: ${props => `url(${props.image})`} ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
`;

export const WrapperInfo = styled.div`
  padding: 0 10px 10px 10px;
`;
