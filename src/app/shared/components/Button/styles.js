import styled from 'styled-components';
import dark from '../../styles/theme/dark';

export const Container = styled.button`
    padding: 0.6rem 1rem;
    font-size: 1.2rem;
    background-color: ${props => props.theme == 'primary' ? `${dark.aux}` : `unset`};
    color: ${props => props.theme == 'primary' ? `${dark.text};` : `${dark.text};`};
    border:  ${props => props.theme == 'secondary' ? `1px solid ${dark.aux}` : `unset`};
    width: 150px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.4s;
    margin:1px 1px;
    z-index: 20;
    &:hover {
      padding-left: 1.6rem;
      background-color: ${props => props.theme == 'primary' ? `${dark.text}` : `${dark.aux}`};
      color: ${props => props.theme == 'primary' ? `${dark.aux};` : `${dark.text};`};
    }
  

`;
