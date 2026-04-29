import { getToken } from './auth';

const API_URL = 'https://wedev-api.sky.pro/api/kanban';


function normalizeErrorMessage(error, defaultMessage) {
  const message = error.message || error;
  
 
  if (message.includes('title is required')) return 'Название задачи обязательно';
  if (message.includes('topic is required')) return 'Выберите категорию задачи';
  if (message.includes('date is required')) return 'Укажите дату задачи';
  if (message.includes('Failed to fetch') || message.includes('Network request failed')) {
    return 'Сервер временно недоступен. Попробуйте позже.';
  }
  
 
  if (typeof message === 'string' && message.length > 0 && !message.includes('Ошибка сервера')) {
    return message;
  }
  
  return defaultMessage;
}

export async function fetchTasks() {
  try {
    const token = getToken();
    const response = await fetch(`${API_URL}/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }

    const data = await response.json();
    return data.tasks;
  } catch (error) {
    throw new Error(normalizeErrorMessage(error, 'Ошибка загрузки задач'));
  }
}

export async function fetchTaskById(id) {
  try {
    const token = getToken();
    const response = await fetch(`${API_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }

    const data = await response.json();
    return data.task;
  } catch (error) {
    throw new Error(normalizeErrorMessage(error, 'Ошибка загрузки задачи'));
  }
}

export async function createTask(taskData) {
  try {
    const token = getToken();
    const response = await fetch(`${API_URL}/`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({
        title: taskData.title,
        topic: taskData.topic,
        description: taskData.description,
        date: taskData.date,
        status: taskData.status || 'Без статуса'
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `Ошибка сервера: ${response.status}`);
    }

    return data;
  } catch (error) {
    throw new Error(normalizeErrorMessage(error, 'Ошибка создания задачи'));
  }
}

export async function updateTask(id, taskData) {
  try {
    const token = getToken();
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({
        title: taskData.title,
        topic: taskData.topic,
        description: taskData.description,
        date: taskData.date,
        status: taskData.status
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `Ошибка сервера: ${response.status}`);
    }

    return data;
  } catch (error) {
    throw new Error(normalizeErrorMessage(error, 'Ошибка обновления задачи'));
  }
}

export async function deleteTask(id) {
  try {
    const token = getToken();
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `Ошибка сервера: ${response.status}`);
    }

    return data;
  } catch (error) {
    throw new Error(normalizeErrorMessage(error, 'Ошибка удаления задачи'));
  }
}
