// vendors
import {
  useEffect,
  useContext,
  useState,
  useCallback,
  useMemo,
  createContext,
} from 'react'

// context
import {useAuthentication} from './auth-context'

// utils
import {connect} from '../utils/socketChat'

// constans
import {EVENTS_TO_LISTEN} from '../constants/socketEvents'
import {URL_SERVER} from '../constants/server'

const ChatContext = createContext()
ChatContext.displayName = 'ChatContext'

function existMessage(messages, newMessage) {
  return messages.find(
    message =>
      newMessage.username === message.username &&
      newMessage.type === message.type &&
      newMessage.time === message.time,
  )
}

function ChatProvider(props) {
  const [messages, setMessages] = useState([])
  const [typingMessage, setTypingMessage] = useState('')
  const [users, setUsers] = useState([])
  const {user} = useAuthentication()

  useEffect(() => {
    const socket = connect(user)
    fetch(URL_SERVER)
      .then(response => response.json())
      .then(data => {
        setMessages(data.messages)
        socket.on(EVENTS_TO_LISTEN.MESSAGE, newMessage => {
          setMessages(prevMessages =>
            existMessage(prevMessages, newMessage)
              ? prevMessages
              : [...prevMessages, newMessage],
          )
        })
      })
      .catch(error => console.error('Error:', error))
  }, [])

  useEffect(() => {
    const socket = connect(user)

    socket.on(EVENTS_TO_LISTEN.USER_CONNECTED, username => {
      setUsers(prevUsers => [...new Set([...prevUsers, username])])
    })

    socket.on(EVENTS_TO_LISTEN.USER_DISCONNECTED, username => {
      setUsers(prevUsers => prevUsers.filter(name => username !== name))
    })

    socket.on(EVENTS_TO_LISTEN.IS_TYPING, typers => {
      const numTypers = Object.entries(typers).filter(
        ([, istyping]) => istyping,
      )

      if (numTypers.length > 1) {
        setTypingMessage(`People are typing...`)
      } else if (numTypers.length === 1) {
        setTypingMessage(`${numTypers[0][0]} is typing`)
      } else {
        setTypingMessage('')
      }
    })
  }, [])

  const addMessage = useCallback(
    newMessage => setMessages([...messages, newMessage]),
    [setMessages, messages],
  )

  const value = useMemo(() => ({messages, addMessage, typingMessage, users}), [
    addMessage,
    messages,
    typingMessage,
    users,
  ])

  return <ChatContext.Provider value={value} {...props} />
}

function useChat() {
  const context = useContext(ChatContext)

  if (context === undefined) {
    throw new Error(`useChat must be used within a ChatProvider`)
  }

  return context
}

export {ChatProvider, useChat}
