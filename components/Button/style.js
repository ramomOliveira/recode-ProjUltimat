import styled from 'styled-components';

const getColorText = (props) => {
  if (props.link) {
    return 'var(--orange)'
  } else if (props.deleteMode) {
    return '#B22222'
  } else {
    return 'var(--white)'
  }
}

const getColorBackground = (props) => {

  if (props.link) {
    return 'transparent'
  } else if (props.deleteMode) {
    return 'transparent'
  } else {
    return 'var(--light-orange)'
  }
}

const getHoverColor = (props) => {
  if (props.link) {
    return 'var(--black)'
  } else if (props.deleteMode) {
    return 'var(--red)'
  } else {
    return 'var(--orange)'
  }
}

const getHoverBorder = (props) => {
  if (props.link) {
    return 'none'
  } else if (props.deleteMode) {
    return 'none'
  } else {
    return '2px solid var(--white)'
  }
}

export const Container = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  width: max-content;
  font-size: 16px;
  color: ${(props) => getColorText(props)};
  background-color: ${(props) => getColorBackground(props)};
  text-transform: ${(props) => (props.link ? 'none' : 'uppercase')};
  text-decoration: ${(props) => (props.link ? 'underline' : 'none')};

  :hover {
    color: ${(props) => getHoverColor(props)};
    border: ${(props) => getHoverBorder(props)};
    background-color: transparent;
    
  }
`;
