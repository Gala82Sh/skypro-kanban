import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../contexts/TasksContext';
import { formatDate } from '../utils/dateUtils';
import Calendar from '../components/Calendar/Calendar';

function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, editTask, removeTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [originalTask, setOriginalTask] = useState(null); 

  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];
  const topics = ['Web Design', 'Research', 'Copywriting'];

  useEffect(() => {
    if (id && tasks.length > 0) {
      const foundTask = tasks.find(t => t._id === id);
      if (foundTask) {
        setTitle(foundTask.title);
        setDescription(foundTask.description || '');
        setTopic(foundTask.topic);
        setStatus(foundTask.status);
        setSelectedDate(foundTask.date ? new Date(foundTask.date) : null);
        setOriginalTask({
          title: foundTask.title,
          description: foundTask.description || '',
          topic: foundTask.topic,
          status: foundTask.status,
          date: foundTask.date ? new Date(foundTask.date) : null,
        });
      }
      setLoading(false);
    }
  }, [id, tasks]);

  const getTopicClass = (t) => {
    switch (t) {
      case 'Web Design': return '_orange';
      case 'Research': return '_green';
      case 'Copywriting': return '_purple';
      default: return '_gray';
    }
  };

  const handleSave = async () => {
    const updatedTask = {
      title,
      topic,
      status,
      description,
      date: selectedDate ? selectedDate.toISOString() : new Date().toISOString(),
    };
    await editTask(id, updatedTask);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await removeTask(id);
    navigate('/');
  };

  const handleCancel = () => {
    if (originalTask) {
      setTitle(originalTask.title);
      setDescription(originalTask.description);
      setTopic(originalTask.topic);
      setStatus(originalTask.status);
      setSelectedDate(originalTask.date);
    }
    setIsEditing(false);
  };

  if (loading) return <div>Загрузка...</div>;
  if (!tasks.find(t => t._id === id)) return <div>Задача не найдена</div>;

  return (
    <div className="pop-browse" style={{ display: 'block' }}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            {}
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">
                {isEditing ? (
                  <input
                    className="form-new__input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: '100%', border: 'none', outline: 'none', padding: 0 }}
                  />
                ) : (
                  title
                )}
              </h3>
              <div className="categories__themes">
                <div className={`categories__theme ${getTopicClass(topic)} _active-category`}>
                  <p>{topic}</p>
                </div>
              </div>
            </div>

            {}
            {isEditing ? (
              <div className="status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  {statuses.map((s) => (
                    <div
                      key={s}
                      className={`status__theme ${status === s ? '_active-status' : ''}`}
                      onClick={() => setStatus(s)}
                      style={{ cursor: 'pointer' }}
                    >
                      <p>{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  <div className="status__theme _active-status">
                    <p>{status}</p>
                  </div>
                </div>
              </div>
            )}

            {}
            <div className="pop-browse__wrap">
              <div className="pop-browse__form form-browse">
                <div className="form-browse__block">
                  <label className="subttl">Описание задачи</label>
                  {isEditing ? (
                    <textarea
                      className="form-browse__area"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Введите описание задачи"
                    />
                  ) : (
                    <textarea
                      className="form-browse__area"
                      value={description}
                      readOnly
                      placeholder="Описание задачи"
                    />
                  )}
                </div>
              </div>
              <Calendar
                onDateSelect={isEditing ? setSelectedDate : null}
                initialDate={selectedDate}
                editable={isEditing}
              />
            </div>

            {}
            <div className="pop-browse__btn-browse">
              {isEditing ? (
                <div className="btn-group">
                  <button className="_btn-bg _hover01" onClick={handleSave}>Сохранить</button>
                  <button className="_btn-bor _hover03" onClick={handleCancel}>Отменить</button>
                  <button className="_btn-bor _hover03" onClick={handleDelete}>Удалить задачу</button>
                </div>
              ) : (
                <div className="btn-group">
                  <button className="_btn-bor _hover03" onClick={() => setIsEditing(true)}>Редактировать задачу</button>
                  <button className="_btn-bor _hover03" onClick={handleDelete}>Удалить задачу</button>
                </div>
              )}
              <button className="_btn-bg _hover01" onClick={() => navigate('/')}>Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;