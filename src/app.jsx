// vendors
import {Suspense, lazy} from 'react'

// context
import {useAuthentication} from './context/auth-context'

const Chat = lazy(() => import('./views/Chat'))
const Join = lazy(() => import('./views/JoinBox'))

export default function App() {
  const {user} = useAuthentication()

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {user ? <Chat /> : <Join />}
    </Suspense>
  )
}
