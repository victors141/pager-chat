// vendors
import ReactDOM from 'react-dom'

// components
import App from './app'

// context
import {AuthProvider} from './context/auth-context'

import 'normalize.css';
import './theme.css';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root'),
)
