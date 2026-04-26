const API_URL = 'https://wedev-api.sky.pro/api/user';

export async function signIn({ login, password }) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {},
      body: JSON.stringify({ login, password })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Ошибка входа');
    }
    
    const token = data.user.token;
    const name = data.user.name;
    const email = login;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    
    return { token, name };
  } catch (error) {
    console.error('Ошибка входа:', error);
    throw new Error(error.message || 'Ошибка подключения к серверу');
  }
}

export async function signUp({ name, login, password }) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {},
      body: JSON.stringify({ name, login, password })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Ошибка регистрации');
    }
    
    const token = data.user.token;
    const userName = data.user.name;
    const email = login;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', email);
    
    return { token, name: userName };
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    throw new Error(error.message || 'Ошибка регистрации');
  }
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
}

export function getToken() {
  return localStorage.getItem('token');
}

export function isAuthenticated() {
  return !!getToken();
}

export function getUserName() {
  return localStorage.getItem('userName');
}

export function getUserEmail() {
  return localStorage.getItem('userEmail');
}

export function setAuthData(token, name, email) {
  localStorage.setItem('token', token);
  localStorage.setItem('userName', name);
  localStorage.setItem('userEmail', email);
}

export function clearAuthData() {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
}