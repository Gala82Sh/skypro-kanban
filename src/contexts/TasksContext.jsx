import { createContext, useState, useContext, useCallback } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/api';
import { useAuth } from './AuthContext';

const TasksContext = createContext();
export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks должен использоваться внутри TasksProvider');
  }
  return context;
}

export function TasksProvider({ children }) {
  const { isAuth } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadTasks = useCallback(async () => {
    if (!isAuth) return;
    
    try {
      setLoading(true);
      setError('');
      const tasksData = await fetchTasks();
      setTasks(tasksData || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [isAuth]);

  const addTask = async (taskData) => {
    try {
      setLoading(true);
      await createTask(taskData);
      await loadTasks(); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const editTask = async (id, taskData) => {
    try {
      setLoading(true);
      await updateTask(id, taskData);
      await loadTasks();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeTask = async (id) => {
    try {
      setLoading(true);
      await deleteTask(id);
      await loadTasks();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    tasks,
    loading,
    error,
    loadTasks,
    addTask,
    editTask,
    removeTask,
  };

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
}