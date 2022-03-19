import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: 10px;
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  > img {
    width: 50px;
  }
  > p {
    font-family: 'Caesar Dressing', sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 100;
    letter-spacing: 5px;
    color: var(--orange);
    
  }
  
`;

export const WrapperLogout = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-bottom: 20px;
  
  > a > li {
    color: red;
    :hover {
    color: red;
    }
  }
  
`;



export const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    marginTop: '10px',

  },
  bmBurgerBars: {
    background: '#f49e0b',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#f49e0b',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0',
    left: '0',
  },
  bmMenu: {
    background: '#000',
    padding: '20px 20px 0',
    fontSize: '25px',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    color: '#f49e0b',
    padding: '10px',
  },
  bmItem: {
    display: 'flex',
    marginBottom: '20px',
    marginTop: '20px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.2)',
    top: '0',
    left: '0',
  },
};
