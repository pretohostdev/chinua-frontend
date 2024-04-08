import styled from 'styled-components';

const StyleContainer = styled.div`
    width: 100%;
    display: flex;
     

`
function Element(props) {
    return <StyleContainer>
        {props.children}

    </StyleContainer>
        ;
}

export default Element;

Element.propTypes