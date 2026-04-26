import { useEffect } from 'react';
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
            {isDark ? (
              <LoadingText style={{
                background: 'linear-gradient(90deg, #C1CDDC, #E9EEF7, #C1CDDC)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'shimmer 1.8s infinite',
                display: 'inline-block'
              }}>
                Загрузка задач...
              </LoadingText>
            ) : (
              <LoadingText>Загрузка задач...</LoadingText>
            )}
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