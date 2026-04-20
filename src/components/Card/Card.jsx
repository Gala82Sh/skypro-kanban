import { Link } from 'react-router-dom';
import {
  CardItem,
  CardContainer,
  CardGroup,
  CardTheme,
  CardBtn,
  CardContent,
  CardTitle,
  CardDate,
} from './Card.styled';

function Card({ card }) {
  return (
    <CardItem>
      <CardContainer>
        <CardGroup>
          <CardTheme $theme={card.theme}>
            <p>{card.theme}</p>
          </CardTheme>
          <Link to={`/card/${card._id}`}>  {}
            <CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </CardBtn>
          </Link>
        </CardGroup>
        <CardContent>
          <Link to={`/card/${card._id}`}>  {}
            <CardTitle>{card.title}</CardTitle>
          </Link>
          <CardDate>
            <p>{card.date}</p>
          </CardDate>
        </CardContent>
      </CardContainer>
    </CardItem>
  );
}

export default Card;