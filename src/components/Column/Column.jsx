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
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </CardsContainer>
    </ColumnContainer>
  );
}

export default Column;