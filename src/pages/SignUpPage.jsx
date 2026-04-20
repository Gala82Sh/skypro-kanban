import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';

function SignUpPage({ onLogin }) {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

     console.log('Отправка данных регистрации:', { name, login, password });

    try {
      const userData = await signUp({ name, login, password });
      if (userData) {
        onLogin();
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" onSubmit={handleSubmit}>
              <input
                className="modal__input"
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="modal__input"
                type="email"
                placeholder="Эл. почта"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
              <input
                className="modal__input"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
              <button className="modal__btn-signup-ent _hover01" type="submit" disabled={loading}>
                {loading ? 'Регистрация...' : 'Зарегистрироваться'}
              </button>
              <div className="modal__form-group">
                <p>Уже есть аккаунт? <Link to="/login">Войдите здесь</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;