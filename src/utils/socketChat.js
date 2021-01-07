import io from 'socket.io-client'
import {CHAT_BASE_URL} from '../constants/socketEvents'

let socket

export function connect(username) {
  if (!socket) {
    socket = io(`${CHAT_BASE_URL}/?username=${username}`, {
      transports: ['websocket'],
      secure: true,
    })
  }

  return socket
}

