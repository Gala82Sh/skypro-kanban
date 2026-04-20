import { useState, useEffect } from 'react';
import { cardList } from '../../data';
import Column from '../components/Column/Column';
import { StyledMain, MainBlock, MainContent, LoadingText } from '../components/Main/Main.styled';

function MainPage() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardList);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const cardsByStatus = {
    'Без статуса': cards.filter(card => card.status === 'Без статуса'),
    'Нужно сделать': cards.filter(card => card.status === 'Нужно сделать'),
    'В работе': cards.filter(card => card.status === 'В работе'),
    'Тестирование': cards.filter(card => card.status === 'Тестирование'),
    'Готово': cards.filter(card => card.status === 'Готово'),
  };

  const columnTitles = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  if (loading) {
    return (
      <StyledMain>
        <div className="container">
          <MainBlock>
            <LoadingText>Данные загружаются...</LoadingText>
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
              <Column key={title} title={title} cards={cardsByStatus[title]} />
            ))}
          </MainContent>
        </MainBlock>
      </div>
    </StyledMain>
  );
}

export default MainPage;