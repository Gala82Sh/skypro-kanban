import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="wrapper" style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Запрашиваемая страница не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;