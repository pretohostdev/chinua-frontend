import Describe from "../Describe";
import Element from "./Element";
import { LogoElement } from "./LogoElement";
import { Container } from "./styles";




export const  Services=()=> {
return <Container  id="about" >
    <Element>
        <LogoElement />
    </Element>
    <Element>
      <Describe />
    </Element>
</Container> ;
}


