import { Logos } from "../../constants/logos";
import {CompanyListContent,CompanyCardLink} from "./styles"

export const Card=({ name, image, path })=> {
  return (
    <CompanyCardLink    to={path}>
      <img   src={image} alt={name} />
      <p>{name}</p>
    </CompanyCardLink>
  );
}

export  function CompanyList() {
    const listCompany=[
        {name:"Constrói" ,image:`${Logos.logo_Constroi}`, path:"/chinua/constroi" },
        {name:"Taxi" ,image:`${Logos.logo_Taxi}`, path:"/chinua/taxi" },
        {name:"Repair" ,image:`${Logos.logo_Repair}`, path:"/chinua/repair" },
        {name:"Auto Parts" ,image:`${Logos.logo_AutoParts}`, path:"/chinua/auto-parts" },
    ]
    return (
     <>
     <div   style={{
      width:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
     }}  >

      <CompanyListContent   >
       {listCompany.map(company => (
        <Card key={company.name} name={company.name} image={company.image} path={company.path} />
      ))}
      </CompanyListContent>
     </div>
     </>
    );
  }