import Card from '../Card/Card';
import {
  ColumnContainer,
  ColumnTitle,
  CardsContainer,
} from './Column.styled';

function Column({ title, cards }) {
  return (
    <ColumnContainer>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {cards && cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardsContainer>
    </ColumnContainer>
  );
}

export default Column;