import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const CompanyCardLink = styled(Link)`


margin: 0px 40px;
  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: #000;
  }

  img {
    width: 100px;
    height: auto;
  }

  p {
    margin: 10px 0;
    color: #fff;
    font-weight: 600;
  }
`;

export const CompanyListContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  gap: 20px;

  margin: 25px 0px;
`;