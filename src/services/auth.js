import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/user';


export async function signIn({ login, password }) {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { login, password },
      {
        headers: {
          'Content-Type': '', 
        },
      }
    );
    
    const token = response.data.user.token;
    const name = response.data.user.name;
    const email = login;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    
    return { token, name };
  } catch (error) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error('Ошибка подключения к серверу');
  }
}

export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(
      API_URL,
      { name, login, password },
      {
        headers: {
          'Content-Type': '', 
        },
      }
    );
    
    const token = response.data.user.token;
    const userName = response.data.user.name;
    const email = login;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', email);
    
    return { token, name: userName };
  } catch (error) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error('Ошибка регистрации');
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