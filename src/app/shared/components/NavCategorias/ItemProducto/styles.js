import styled from 'styled-components';
import dark from '../../../styles/theme/dark';

export const Container = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        row-gap: .4rem;
        align-items: center;
        margin: 0 auto;
        
        img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
            box-shadow: 2px 2px 4px rgba(0,0,0,0.12);
        }
        .title-product{
             
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            font-size: 1.2rem;
            color: ${dark.text};
            .product-year{
                color: ${dark.aux};
            }
        }

        .details{
            font-size: 1.1rem;
            color: ${dark.aux};
            .velocity{
                color: ${dark.text};
            }
        }
`;
