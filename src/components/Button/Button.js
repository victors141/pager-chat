import {ButtonStyled} from './button.styled'

export default function Button(props) {
  return (
    <ButtonStyled onClick={props.handleClick} {...props}>{props.children}</ButtonStyled>
  )
}
