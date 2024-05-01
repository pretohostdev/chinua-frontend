import { Carousel } from "keep-react"
import { ContainerTeam,ContainerTitle,ContainerListMember,ContainerMember } from "./style"
import { Fade, Slide } from "react-awesome-reveal"





export const Team=()=>{



    return(
        
<ContainerTeam>
    <ContainerTitle>
      <h3>Nosso Team</h3>
    </ContainerTitle>

            
    <ContainerListMember>

          
        <Fade cascade damping={0.4}>
          <ContainerMember>
            <img src="https://lirp.cdn-website.com/14bc49a8/dms3rep/multi/opt/Depositphotos_162644654_l-2015-21bf85dc-1920w.jpg"  />
          <p>Fulano</p>
        </ContainerMember>
        <ContainerMember>
            <img src="https://lirp.cdn-website.com/14bc49a8/dms3rep/multi/opt/Depositphotos_162644654_l-2015-21bf85dc-1920w.jpg"  />
          <p>Sicrano</p>
        </ContainerMember>
        <ContainerMember>
            <img src="https://lirp.cdn-website.com/14bc49a8/dms3rep/multi/opt/Depositphotos_162644654_l-2015-21bf85dc-1920w.jpg"  />
          <p>Beltrano</p>
        </ContainerMember>
        <ContainerMember>
            <img src="https://lirp.cdn-website.com/14bc49a8/dms3rep/multi/opt/Depositphotos_162644654_l-2015-21bf85dc-1920w.jpg"  />
          <p>Fulano</p>
        </ContainerMember>
        </Fade>
          
    </ContainerListMember>
            
</ContainerTeam>
    )
}