import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCardPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Новая задача:', { title, description });
    navigate('/'); 
  };

  return (
    <div className="pop-new-card" style={{ display: 'block' }}>
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <button className="pop-new-card__close" onClick={() => navigate('/')}>✖</button>
            <form onSubmit={handleSubmit}>
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
              <button className="form-new__create _hover01" type="submit">Создать задачу</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCardPage;