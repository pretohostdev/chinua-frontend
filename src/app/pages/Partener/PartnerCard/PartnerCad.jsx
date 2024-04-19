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
    margin-bottom: 20PX;



  img{
    width: 100%;
    height: 320px;
    border-radius: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    image-orientation: flip;
    object-fit: fill;
    
  }

  h2{
    color: #fff;
    font-weight:400;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 10px;
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