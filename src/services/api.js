import axios from 'axios';
import { getToken } from './auth';

const API_URL = 'https://wedev-api.sky.pro/api/kanban';


const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': '', 
  },
});


apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export async function fetchTasks() {
  try {
    const response = await apiClient.get('/');
    return response.data.tasks;
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Необходимо авторизоваться');
    }
    throw new Error('Ошибка загрузки задач');
  }
}


export async function fetchTaskById(id) {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data.task;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Задача не найдена');
    }
    throw new Error('Ошибка загрузки задачи');
  }
}


export async function createTask(taskData) {
  try {
    const response = await apiClient.post('/', taskData);
    return response.data.tasks;
  } catch (error) {
    throw new Error('Ошибка создания задачи');
  }
}


export async function updateTask(id, taskData) {
  try {
    const response = await apiClient.put(`/${id}`, taskData);
    return response.data.tasks;
  } catch (error) {
    throw new Error('Ошибка обновления задачи');
  }
}


export async function deleteTask(id) {
  try {
    const response = await apiClient.delete(`/${id}`);
    return response.data.tasks;
  } catch (error) {
    throw new Error('Ошибка удаления задачи');
  }
}
