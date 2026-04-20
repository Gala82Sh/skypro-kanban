import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTaskById } from '../services/api';

function CardPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      loadTask();
    } else {
      setError('ID задачи не указан');
      setLoading(false);
    }
  }, [id]);

  const loadTask = async () => {
    try {
      setLoading(true);
      console.log('Загружаем задачу с id:', id);
      const taskData = await fetchTaskById(id);
      console.log('Полученная задача:', taskData);
      setTask(taskData);
      setError('');
    } catch (err) {
      console.error('Ошибка загрузки:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getThemeClass = (theme) => {
    switch (theme) {
      case 'Web Design': return '_orange';
      case 'Research': return '_green';
      case 'Copywriting': return '_purple';
      default: return '_gray';
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Загрузка...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>Ошибка: {error}</div>;
  }

  if (!task) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Задача не найдена</div>;
  }

  
  const formatDate = (dateString) => {
    if (!dateString) return 'Дата не указана';
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear().toString().slice(-2)}`;
  };

  return (
    <div className="pop-browse" style={{ display: 'block' }}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <div className={`categories__theme theme-top ${getThemeClass(task.topic)} _active-category`}>
                <p className={getThemeClass(task.topic)}>{task.topic}</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _gray">
                  <p className="_gray">{task.status}</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea className="form-browse__area" value={task.description || ''} readOnly placeholder="Описание задачи..."></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <div className="calendar__nav">
                    <div className="calendar__month">{task.date ? new Date(task.date).toLocaleString('ru', { month: 'long', year: 'numeric' }) : 'Дата не указана'}</div>
                  </div>
                  <div className="calendar__period">
                    <p className="calendar__p date-end">Срок исполнения: <span className="date-control">{formatDate(task.date)}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">Редактировать</button>
                <button className="btn-browse__delete _btn-bor _hover03">Удалить</button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01" onClick={() => navigate('/')}>Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
