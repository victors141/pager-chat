import {InputContainer, Label, InputStyled} from './input.styled'

export default function Input(props) {
  return (
    <InputContainer>
      {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
      <InputStyled
        autoComplete="off"
        aria-label={props.label || props.placeholder}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.value}
        onKeyPress={props.handleKeypress}
        type="text"
      ></InputStyled>
      {props.children}
    </InputContainer>
  )
}
