import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../contexts/TasksContext';
import Calendar from '../components/Calendar/Calendar';

function AddCardPage() {
  const navigate = useNavigate();
  const { addTask, loading } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('Web Design');
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const taskData = {
      title: title || 'Новая задача',
      topic,
      description: description || '',
      date: selectedDate ? selectedDate.toISOString() : new Date().toISOString(),
    };

    try {
      await addTask(taskData);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pop-new-card" style={{ display: 'block' }}>
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <button className="pop-new-card__close" onClick={() => navigate('/')}>✖</button>
            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input
                    className="form-new__input"
                    type="text"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea
                    className="form-new__area"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="pop-new-card__categories categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__themes">
                    <div 
                      className={`categories__theme _orange ${topic === 'Web Design' ? '_active-category' : ''}`}
                      onClick={() => setTopic('Web Design')}
                      style={{ cursor: 'pointer' }}
                    >
                      <p className="_orange">Web Design</p>
                    </div>
                    <div 
                      className={`categories__theme _green ${topic === 'Research' ? '_active-category' : ''}`}
                      onClick={() => setTopic('Research')}
                      style={{ cursor: 'pointer' }}
                    >
                      <p className="_green">Research</p>
                    </div>
                    <div 
                      className={`categories__theme _purple ${topic === 'Copywriting' ? '_active-category' : ''}`}
                      onClick={() => setTopic('Copywriting')}
                      style={{ cursor: 'pointer' }}
                    >
                      <p className="_purple">Copywriting</p>
                    </div>
                  </div>
                </div>

                {error && <p style={{ color: 'red', margin: '10px 0' }}>{error}</p>}
                <button className="form-new__create _hover01" type="submit" disabled={loading}>
                  {loading ? 'Создание...' : 'Создать задачу'}
                </button>
              </form>
              
              <Calendar onDateSelect={handleDateSelect} initialDate={selectedDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCardPage;