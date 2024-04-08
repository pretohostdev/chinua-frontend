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
            line-height: 1.6;
            font-size: 1.2rem;
            text-align: justify;
         
            .empresa{
               font-weight: bolder;
            }
         }
      }
   }
`;
