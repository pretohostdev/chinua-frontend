import styled from "styled-components";



export const ContainerTeam=styled.div`
margin-top: 25px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


export const ContainerTitle=styled.div`


h3{
    font-size: 24px;
    color: #fff;
}

`;
export const ContainerListMember=styled.div`
margin-top: 25px;
gap:15px;
display: flex;
justify-content: space-around;
align-items: center;
`;
export const ContainerMember=styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    p{
        margin-top: 14px;
        color: #fff;

    }
`;