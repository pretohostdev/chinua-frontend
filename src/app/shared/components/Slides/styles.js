import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;
    height: 100vh;
    position: absolute;
    width: 70vw;
    overflow: hidden;
    transform: translate(35%, -21%);
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 0 50%);
    z-index:  1;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: -72%;      
        clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 70%, 20% 0%);
        background-color: rgba(255,255,255,.3);
        z-index: 20;
    }


    @media screen and (max-width: 960px){
        transform: translate(10%, -25%);
        width: 80vw;
    }
    @media screen and (max-width: 600px){
        transform: translate(0%, -25%);
        width: 98vw;
    }
    

   
`;
