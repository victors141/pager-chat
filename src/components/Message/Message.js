// utils
import formatLocaleTime from '../../utils/dateUtils'

import {
  Avatar,
  Author,
  Content,
  Image,
  MessageContainer,
  MessageTime,
  Text,
} from './message.styled'

export default function Message({message,scrollBottom}) {
  const isTextMessage = message.type === 'text'
  const avatarSrc = `https://ui-avatars.com/api/?name=${message.username}?background=eee&color=000`

  return (
    <MessageContainer>
      <Avatar>
        <img src={avatarSrc} alt={message.username} />
      </Avatar>
      <Content>
        <Author>
          {message.username}
          <MessageTime className="message-time">
            {formatLocaleTime(message.time)}
          </MessageTime>
        </Author>
        {isTextMessage ? (
          <Text>{message.text}</Text>
        ) : (
          <Image
            className="message-image"
            src={message.url}
            alt={message.alt}
            onLoad={scrollBottom}
          />
        )}
      </Content>
    </MessageContainer>
  )
}
