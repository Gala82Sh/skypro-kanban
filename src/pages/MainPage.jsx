import { useState, useEffect } from 'react';
import { fetchTasks } from '../services/api';
import Column from '../components/Column/Column';
import { StyledMain, MainBlock, MainContent, LoadingText } from '../components/Main/Main.styled';

function MainPage() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const tasksData = await fetchTasks();
      setTasks(tasksData);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const tasksByStatus = {
    'Без статуса': tasks.filter(task => task.status === 'Без статуса'),
    'Нужно сделать': tasks.filter(task => task.status === 'Нужно сделать'),
    'В работе': tasks.filter(task => task.status === 'В работе'),
    'Тестирование': tasks.filter(task => task.status === 'Тестирование'),
    'Готово': tasks.filter(task => task.status === 'Готово'),
  };

  const columnTitles = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  if (loading) {
    return (
      <StyledMain>
        <div className="container">
          <MainBlock>
            <LoadingText>Загрузка задач...</LoadingText>
          </MainBlock>
        </div>
      </StyledMain>
    );
  }

  if (error) {
    return (
      <StyledMain>
        <div className="container">
          <MainBlock>
            <LoadingText style={{ color: 'red' }}>Ошибка: {error}</LoadingText>
          </MainBlock>
        </div>
      </StyledMain>
    );
  }

  return (
    <StyledMain>
      <div className="container">
        <MainBlock>
          <MainContent>
            {columnTitles.map((title) => (
              <Column key={title} title={title} cards={tasksByStatus[title]} />
            ))}
          </MainContent>
        </MainBlock>
      </div>
    </StyledMain>
  );
}

export default MainPage;