import React from 'react';
import { Fade } from 'react-awesome-reveal';
import LogoMJS from "../../../assets/parceiros/logo_mjs.jpg"
import LogoDECISOESESOLUCOES from "../../../assets/parceiros/logo_decisoes&solucoes.jpg"
import LogoBNPTECH from "../../../assets/parceiros/logo_bnp_tech.jpg"
import LogoGDX from "../../../assets/parceiros/logo_grupo_gdx.jpg"
import LogoBADM from "../../../assets/parceiros/logo_badm.jpg"
import LogoBBDEV from "../../../assets/parceiros/logo_b_b_dev.jpg"
import TATIFA from "../../../assets/parceiros/logo_latifa_lda.jpg"
import Hamilton from "../../../assets/parceiros/hamilton.png"

import PartnerCard from './PartnerCard/PartnerCad';
import { ContainerListPartner } from './styles';

export const Partener = () => {
  const partners = [
    { name: 'MJS BUSINESS  GROUP', image: LogoMJS,link:"#" },
    { name: 'GRUPO GDX', image: LogoGDX ,link:"#"},
    { name: 'DECISÕES & SOLUÇÕES', image: LogoDECISOESESOLUCOES,link:"#" },
    { name: 'BNP TECH Oil And Gas Services', image: LogoBNPTECH,link:"#" },
    { name: 'BADM', image: LogoBADM,link:"#" },
    { name: 'B.B.DEV', image: LogoBBDEV,link:"#" },
    { name: 'LATIFA LDA', image: TATIFA,link:"#" },
    { name: 'Hamilton Kapapelo Construção e Gestão Imobiliária', image: Hamilton,link:"#" },

  ];

 
 return <>

  <ContainerListPartner>
      <div  style={{marginTop:20}}>
      <h2 style={{fontSize:32,color:"#fff",fontWeight:300}} >
 
       Nossos Parceiros

       </h2>
      </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}} >

    {partners.map((partner, index) => (
      <a href={partner.link}  target='_blank'>
        <PartnerCard key={index} partner={partner} />
      </a>
    ))}
    </div>
  </ContainerListPartner>
  </>
}

