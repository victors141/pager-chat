// components
import ChatInputs from '../components/ChatInput/ChatInputs'
import ChatMessageList from '../components/ChatMessageList/ChatMessageList'

import {ChatProvider} from '../context/chatContext'
import {
  Container,
  BoxContainer,
} from './boxContainer.styled'

export default function Chat() {
  return (
    <ChatProvider>
      <Container>
        <BoxContainer className="chat-container">
          <ChatMessageList />
          <ChatInputs />
        </BoxContainer>
      </Container>
    </ChatProvider>
  )
}
