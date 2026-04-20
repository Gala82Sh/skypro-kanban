import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      onLogin(); 
      navigate('/');
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
              />
              <input
                className="modal__input"
                type="email"
                placeholder="Эл. почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="modal__input"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="modal__btn-signup-ent _hover01" type="submit">
                Зарегистрироваться
              </button>
              <div className="modal__form-group">
                <p>Уже есть аккаунт? <a href="/login">Войдите здесь</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;