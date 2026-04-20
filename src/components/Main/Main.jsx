import { useState, useEffect } from 'react';
import { cardList } from '../../../data.js';
import Column from '../Column/Column';

function Main() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  // имитация загрузки данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardList);
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  // группировка карточек по статусу
  const cardsByStatus = {
    'Без статуса': cards.filter(card => card.status === 'Без статуса'),
    'Нужно сделать': cards.filter(card => card.status === 'Нужно сделать'),
    'В работе': cards.filter(card => card.status === 'В работе'),
    'Тестирование': cards.filter(card => card.status === 'Тестирование'),
    'Готово': cards.filter(card => card.status === 'Готово'),
  };

  const columnTitles = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  // сообщение о загрузке
  if (loading) {
    return (
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px', color: '#94A6BE' }}>
              Данные загружаются...
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnTitles.map((title) => (
              <Column 
                key={title} 
                title={title} 
                cards={cardsByStatus[title]} 
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;