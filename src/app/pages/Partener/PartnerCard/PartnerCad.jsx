import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
const Card = styled.div`

   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: transparent;
    padding: 10px;
    margin: 10px;
    border-radius:10px;
    box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.9);
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
    font-weight:300;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const PartnerCard = ({ partner }) => (
   
   
  <Card>
    <h2>{partner.name}</h2>
    <img src={partner.image} alt={partner.name} />
  </Card>
   
);

export default PartnerCard;