// vendors
import {useState, useCallback} from 'react'

// components
import {useChat} from '../../context/chatContext'
import Input from '../Input/Input'

// utils
import {connect} from '../../utils/socketChat'
import debounce from '../../utils/debounce'
import {getGiphy} from '../../utils/requestImage'

// constants
import {EVENTS_TO_EMIT} from '../../constants/socketEvents'
import {GIPHY_QUERY} from '../../constants/giphy'

import {MessageBoxContainer, ButtonSend, Typing} from './chatInputs.styled'

export default function ChatInput() {
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const {typingMessage} = useChat()

  const debounceFn = useCallback(
    debounce(() => {
      setIsTyping(false)
      connect().emit(EVENTS_TO_EMIT.TYPING, false)
    }, 1000),
    [],
  )

  const handleChange = e => {
    setMessage(e.target.value)
    if (!isTyping) {
      setIsTyping(true)
      connect().emit(EVENTS_TO_EMIT.TYPING, true)
    }
    debounceFn()
  }

  const handleSubmit = () => {
    const formattedMessage = message.trim()

    if (formattedMessage.indexOf(GIPHY_QUERY) === 0) {
      const searchImg = formattedMessage.split(' ').slice(1).join(' ')
      if (searchImg) {
        getGiphy(searchImg)
          .then(giphyData => {
            const {image_url} = giphyData.data

            connect().emit(EVENTS_TO_EMIT.IMAGE_MESSAGE, {
              url: image_url,
              alt: searchImg,
            })
          })
          .catch(console.error)
        setMessage('')
      }
    } else {
      connect().emit(EVENTS_TO_EMIT.TEXT_MESSAGE, message)
      setMessage('')
    }
  }

  const handleKeypress = e => {
    if (e.charCode === 13) {
      handleSubmit()
    }
  }

  return (
    <MessageBoxContainer>
      <Input
        placeholder="Message"
        handleChange={handleChange}
        value={message}
        handleKeypress={handleKeypress}
      >
        <ButtonSend onClick={handleSubmit}>Send</ButtonSend>
      </Input>

      <Typing className={typingMessage ? '' : 'hide'}>{typingMessage}</Typing>
    </MessageBoxContainer>
  )
}
