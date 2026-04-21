import { createContext, useState, useContext, useEffect } from 'react';
import { getToken, getUserName, setAuthData, clearAuthData } from '../services/auth';

const AuthContext = createContext();
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
}
export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    const name = getUserName();
    if (token && name) {
      setIsAuth(true);
      setUserName(name);
    }
    setLoading(false);
  }, []);


  const login = (token, name, email) => {
    setAuthData(token, name, email);
    setIsAuth(true);
    setUserName(name);
  };

  const logout = () => {
    clearAuthData();
    setIsAuth(false);
    setUserName('');
  };

 const value = {
    isAuth,
    userName,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}