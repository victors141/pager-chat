// vendors
import {useState} from 'react'

// components
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

// context
import {useAuthentication} from '../context/auth-context'

import {Container, BoxContainer} from './boxContainer.styled'

export default function JoinBox() {
  const [username, setUsername] = useState('')
  const {register} = useAuthentication()

  const handleSubmit = e => {
    e.preventDefault()
    register(username)
  }

  const handleKeypress = e => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <Container>
      <BoxContainer className="card-join">
        <h1 className="title">Join chat</h1>
        <form className="main-form">
          <Input
            id="join-input"
            label="Please enter your username"
            handleChange={e => setUsername(e.target.value)}
            value={username}
            handleKeypress={handleKeypress}
          ></Input>
          <div className="submit-btn">
            <Button handleClick={handleSubmit}>Next</Button>
          </div>
        </form>
      </BoxContainer>
    </Container>
  )
}
