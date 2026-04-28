import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTasks } from '../contexts/TasksContext';
import { useTheme } from '../contexts/ThemeContext';
import Column from '../components/Column/Column';
import { StyledMain, MainBlock, MainContent, LoadingText } from '../components/Main/Main.styled';

function MainPage() {
  const { tasks, loading, error, loadTasks } = useTasks();
  const { isDark } = useTheme();

  useEffect(() => {
    loadTasks();
  }, []);

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
      <Outlet />
    </StyledMain>
  );
}

export default MainPage;