import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useTasks } from '../contexts/TasksContext';
import { useTheme } from '../contexts/ThemeContext';
import Column from '../components/Column/Column';
import LoaderCard from '../components/Loader/LoaderCard';
import { StyledMain, MainBlock, MainContent, LoadingText } from '../components/Main/Main.styled';

function MainPage() {
  const navigate = useNavigate();
  const { tasks, loading, error, loadTasks, editTask } = useTasks();
  const { isDark } = useTheme();
  const [localTasks, setLocalTasks] = useState([]);

  const columnTitles = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    setLocalTasks(tasks);
  }, [tasks]);

  const getTasksByStatus = (status) => {
    return localTasks.filter(task => task.status === status);
  };

  const handleDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const task = localTasks.find(t => t._id === draggableId);
    if (!task) return;

    const newStatus = destination.droppableId;

    const updatedTasks = localTasks.map(t => {
      if (t._id === draggableId) {
        return { ...t, status: newStatus };
      }
      return t;
    });
    setLocalTasks(updatedTasks);

    try {
      await editTask(draggableId, { ...task, status: newStatus });
      await loadTasks();
    } catch (err) {
      setLocalTasks(tasks);
    }
  };

  
  if (loading && tasks.length === 0) {
    if (!isDark) {
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
    
    return (
      <StyledMain>
        <div className="container">
          <MainBlock>
            <MainContent>
              {columnTitles.map((title) => (
                <div key={title} style={{ minWidth: '230px', marginRight: '20px' }}>
                  <h3 style={{ marginBottom: '15px', color: '#FFFFFF' }}>
                    {title}
                  </h3>
                  {[1, 2, 3].map((i) => (
                    <LoaderCard key={i} />
                  ))}
                </div>
              ))}
            </MainContent>
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

  
  if (!loading && tasks.length === 0) {
    return (
      <StyledMain>
        <div className="container">
          <MainBlock>
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>📋</div>
              <h2 style={{ 
                marginBottom: '15px', 
                fontSize: '24px', 
                color: isDark ? '#FFFFFF' : '#000000' 
              }}>
                Новых задач нет
              </h2>
              <p style={{ 
                marginBottom: '30px', 
                color: '#94A6BE', 
                fontSize: '16px' 
              }}>
                Создайте свою первую задачу, чтобы начать работу
              </p>
              <button 
                className="_btn-bg _hover01" 
                onClick={() => navigate('/card/add')}
                style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer' }}
              >
                + Создать задачу
              </button>
            </div>
          </MainBlock>
        </div>
        <Outlet />
      </StyledMain>
    );
  }

  
  return (
    <StyledMain>
      <div className="container">
        <MainBlock>
          <DragDropContext onDragEnd={handleDragEnd}>
            <MainContent>
              {columnTitles.map((status) => (
                <Droppable key={status} droppableId={status}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      style={{
                        minWidth: '230px',
                        marginRight: '20px',
                        backgroundColor: snapshot.isDraggingOver ? 'rgba(86, 94, 239, 0.1)' : 'transparent',
                        borderRadius: '10px',
                        transition: 'background-color 0.2s ease',
                      }}
                    >
                      <Column title={status} cards={getTasksByStatus(status)} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </MainContent>
          </DragDropContext>
        </MainBlock>
      </div>
      <Outlet />
    </StyledMain>
  );
}

export default MainPage;