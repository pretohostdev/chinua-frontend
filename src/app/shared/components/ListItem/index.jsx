import styled from "styled-components";
import dark from "../../styles/theme/dark";

const Style = styled.li`
  padding: .4rem;
    a{
      color: ${dark.text};
      font-size: 1rem;
      cursor: pointer;
      padding: .4rem 1rem;
      transition: all .4s;
      font-weight: 300;
      &:hover{
        color: ${dark.aux};
      }
    }

    #contacto{
      background-color: rgba(0,0,0,0.4);
      color: ${dark.aux};
      border-radius: 5px;
      &:hover{
        color: ${dark.text}
      }
    }


`

export const ListItem = (props) => {
  return <Style style={props}>
    {props.children}
  </Style>
}

ListItem.propTypes 