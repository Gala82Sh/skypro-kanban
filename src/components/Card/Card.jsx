import { Link } from 'react-router-dom';
import { Draggable } from '@hello-pangea/dnd';
import { formatDate } from '../../utils/dateUtils';
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

function Card({ card, index }) {  
  return (
    <Draggable draggableId={card._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.8 : 1,
          }}
        >
          <CardItem>
            <CardContainer>
              <CardGroup>
                <CardTheme $theme={card.topic}>
                  <p>{card.topic}</p>
                </CardTheme>
                <Link to={`/card/${card._id}`}>
                  <CardBtn>
                    <div></div>
                    <div></div>
                    <div></div>
                  </CardBtn>
                </Link>
              </CardGroup>
              <CardContent>
                <Link to={`/card/${card._id}`}>
                  <CardTitle>{card.title}</CardTitle>
                </Link>
                <CardDate>
                  <img src="/images/calendar-clear-outline.png" alt="Календарь" width="13" height="13" />
                  <p>{formatDate(card.date)}</p>
                </CardDate>
              </CardContent>
            </CardContainer>
          </CardItem>
        </div>
      )}
    </Draggable>
  );
}

export default Card;