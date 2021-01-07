// vendors
import {useCallback, useEffect, useRef} from 'react'

// components
import Message from '../Message/Message'

// context
import {useChat} from '../../context/chatContext'

// utils
import debounce from '../../utils/debounce'

import {MessageList} from './chatMessageList.styled.js'

export default function ChatList() {
  const {messages} = useChat()
  let messageListRef = useRef()

  const scrollBottom = useCallback(
    debounce(() => {
      messageListRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }, 500),
    [],
  )

  useEffect(() => {
    scrollBottom()
  }, [messages])

  return (
    <MessageList className="message-list">
      {messages.map(message => (
        <Message
          key={message.time}
          message={message}
          scrollBottom={scrollBottom}
        />
      ))}
      <div className="bottom-list" ref={messageListRef}></div>
    </MessageList>
  )
}
