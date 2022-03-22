import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 16px;

  > img {
    width: 40px;
    height: 40px;
  }
`;

export const IconGit = styled.div`
  background-image: url("/images/about/5.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
  :hover {
    background-image: url("/images/about/5White.svg");
    cursor: pointer;
  }
`;

export const IconInsta = styled.div`
  background-image: url("/images/about/7.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
  :hover {
    background-image: url("/images/about/7White.svg");
    cursor: pointer;
  }
`;

export const IconLinkD = styled.div`
  background-image: url("/images/about/6.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
  :hover {
    background-image: url("/images/about/6White.svg");
    cursor: pointer;
  }
`;

export const IconZap = styled.div`
  background-image: url("/images/about/zapCor.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
  :hover {
    background-image: url("/images/about/zapWhite.svg");
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  color: var(--white);
  text-transform: uppercase;
`;

export const ImgAvatar = styled.div`
  > img {
    width: 200px;
  }
`;