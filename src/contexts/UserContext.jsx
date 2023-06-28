import { createContext, useState } from 'react';
import { login, logout } from '../services/AuthService';

const UserContext = createContext({
  userId: null,
  logado: false,
  handleLogin: () => {},
  handleLogout: () => {},
});

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState({ userId: null, logado: false });

  async function handleLogin(email, password) {
    await login(email, password)
      .then((id) => setCurrentUser({ userId: id, logado: true }))
      .catch((error) => {
        throw Error(error.message);
      });
  }

  async function handleLogout() {
    await logout()
      .then(setCurrentUser({ userId: null, logado: false }))
      .catch((err) => {
        throw Error(err.message);
      });
  }

  const contexto = {
    userId: currentUser.userId,
    logado: currentUser.logado,
    handleLogin,
    handleLogout,
  };

  return <UserContext.Provider value={contexto}>{props.children}</UserContext.Provider>;
}

export default UserContext;
