import styled from 'styled-components';
import dark from '../../styles/theme/dark'

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   background: ${dark.text};
   padding: 1.2rem 0px;




   .top{
      width: 100%;
      margin: 0 auto;
      position: relative;
      &::before{
         content: "";
         width: 100%;
         position: absolute;
         bottom: 0;
         left: 0;
         z-index: 100;
         height: 5px;
         background-image: linear-gradient(to right, ${dark.aux}, ${dark.text} 80%)
     }
   }

.container-flex{
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #121212;
   padding: 0px 80px;
   @media screen and (max-width: 760px){
         flex-flow: column;
         column-gap: 0rem;
      }
}

.logo{
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}
.logo img{
   width: 500px;
   height: 500px;
   @media screen and (max-width: 760px){
         margin-top: 20px;
         width: 350px;
         height: 350px;
      }
}
.element .primario{
   color: #fff;
}


   .container .element{
      width: 100%;
      display: flex;
      column-gap: 4rem;
      justify-content: space-between;
    
      @media screen and (max-width: 760px){
         flex-flow: column-reverse;
         column-gap: 0rem;
      }

      .element-bottom{
         width: 70%;
         display: flex;
         flex-direction: column;
         align-items:flex-end;
         justify-content: flex-end;
         @media screen and (max-width: 760px){
            width: 100%;
         }

         .title{
            font-size: 2.1rem;
            font-weight: 500;
            color: #999;
         }
         .inter{
            display:flex;
            justify-content: space-between;
            gap: .3rem;
            align-items: center;

            span{
               color: ${dark.aux};
            }
            .dot{
               color: #000;
               font-size: 1.2rem;
            }
         }
      }
      
      .element-second{
         width: 70%;
         display: flex;
         flex-direction: column;
         padding: 1rem 0;
       
         @media screen and (max-width: 760px){
            width: 100%;
         }

         .element-second-title{
            margin-bottom: 2rem;
            font-size: 2rem;
            color: ${dark.aux};
            font-weight: normal;
         }
         p{
            color: #fff;
            line-height: 1.6;
            font-size: 1.2rem;
            text-align: justify;
            font-weight: 200;
         
            .empresa{
               font-weight: bolder;
            }
         }
      }
   }
`;
