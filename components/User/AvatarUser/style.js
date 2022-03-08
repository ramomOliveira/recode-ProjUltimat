import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgAvatar = styled.div`
  background-color: ${(props) => props.theme.colors.textPrimary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  
  background-image: ${props => `url(${props.imgAvatar})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
