import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #020617;
    padding: 10px;
    margin: 10px;
    border-radius:10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);



  img{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  h2{
    color: #fff;
    font-weight:200;
  }
`;

const PartnerCard = ({ partner }) => (
    <Fade    delay={1e3} cascade damping={1e-1}>
   
  <Card>
    <h2>{partner.name}</h2>
    <img src={partner.image} alt={partner.name} />
  </Card>
    </Fade>
);

export default PartnerCard;