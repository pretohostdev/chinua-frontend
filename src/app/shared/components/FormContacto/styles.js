import styled from 'styled-components';
import dark from '../../styles/theme/dark';

export const Container = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin: 0rem 0px;
  .form-input{
    width: 100%;
    display: flex;
    gap: .8rem;
    input, textarea{
        width: 100%;
        background: unset;
        border: 1px solid ${dark.text};
        padding: .8rem;
        border-radius: 1px;
        font-weight: 400!important;
        color: ${dark.text};
        font-size: 1rem;
        &:focus{
            outline: none;
            border: 1px solid ${dark.aux};
        }
        &::placeholder{
            font-weight: 400;
        }
    }
    textarea{
        height: 200px;
        resize: none;
    }
  }

  @media screen and (max-width: 960px){
   width: 100%;
   .form-input{
      flex-direction: column;
       &:last-child{
        flex-direction: row;
      }
    }

  }
`;
