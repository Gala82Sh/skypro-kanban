import { useParams } from 'react-router-dom';
import { cardList } from '../../data';

function CardPage() {
  const { id } = useParams(); 
  const card = cardList.find(c => c.id === Number(id)); 

  if (!card) {
    return <div>Карточка не найдена</div>;
  }

  return (
    <div className="pop-browse" style={{ display: 'block' }}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{card.theme}</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _gray">
                  <p className="_gray">{card.status}</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea className="form-browse__area" name="text" id="textArea01" readOnly placeholder="Описание задачи..."></textarea>
                </div>
              </form>
            </div>
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">Редактировать</button>
                <button className="btn-browse__delete _btn-bor _hover03">Удалить</button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;