import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && password) {
      onLogin(); 
      navigate('/'); 
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" onSubmit={handleSubmit}>
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
              <button className="modal__btn-enter _hover01" type="submit">
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <a href="/register">Регистрируйтесь здесь</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;