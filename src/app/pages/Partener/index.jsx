import React from 'react';
import { Fade } from 'react-awesome-reveal';
import LogoToyota from "../../../assets/parceiros/logo_toyota.jpg"
import LogoMercedes from "../../../assets/parceiros/mercedes_logo.png"
import LogoHyundai from "../../../assets/parceiros/logo_hunday.jpg"
import PartnerCard from './PartnerCard/PartnerCad';
import { ContainerListPartner } from './styles';

export const Partener = () => {
  const partners = [
    { name: 'Toyota', image: LogoToyota },
    { name: 'Mercedes Benz', image: LogoMercedes },
    { name: 'Hyundai', image: LogoHyundai },
    
    
  ];

 
 return <>

  <ContainerListPartner>
      <div>
      <h2>
  <Fade delay={1e3} cascade damping={1e-1}>
       Parceiro da chinua Dembo
  </Fade>
       </h2>
      </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >

    {partners.map((partner, index) => (
      <PartnerCard key={index} partner={partner} />
    ))}
    </div>
  </ContainerListPartner>
  </>
}

