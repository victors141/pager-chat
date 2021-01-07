import styled from '@emotion/styled'

export const MessageBoxContainer = styled.div`
  width: 100%;
  position: relative;

  & > div {
    display: flex;
    align-items: center;
  }
  input {
    padding-left: 20px;
    margin-bottom: 8px;
  }
`

export const ButtonSend = styled.button`
  position: absolute;
  right: 15px;
  background: 0;
  border: 0;
  outline: 0;
  font-size: 0.875rem;
  color: #969696;

  &:hover {
    cursor: pointer;
    color: #FF8200;
  }
`

export const Typing = styled.p`
  font-size: 0.75rem;
  color: #969696;
  margin-bottom: 4px;
  min-height: 0.75rem;

  &.hide {
    opacity: 0;
    visibility: hidden;
  }
`
