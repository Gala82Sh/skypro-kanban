import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../services/auth';
import { useAuth } from '../contexts/AuthContext';

function SignInPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ login: false, password: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const isFormValid = login.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const trimmedLogin = login.trim();
    const trimmedPassword = password.trim();
    
    const newFieldErrors = {
      login: trimmedLogin === '',
      password: trimmedPassword === '',
    };
    setFieldErrors(newFieldErrors);
    
    if (newFieldErrors.login || newFieldErrors.password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    
    setLoading(true);

    try {
      const userData = await signIn({ login: trimmedLogin, password: trimmedPassword });
      if (userData) {
        authLogin(userData.token, userData.name, trimmedLogin);
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
      setFieldErrors({ login: true, password: true });
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (field, value) => {
    if (field === 'login') setLogin(value);
    if (field === 'password') setPassword(value);
    if (fieldErrors[field]) {
      setFieldErrors({ ...fieldErrors, [field]: false });
    }
    if (error) setError('');
  };

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="modal__input"
                type="email"
                placeholder="Эл. почта"
                value={login}
                onChange={(e) => handleFieldChange('login', e.target.value)}
                style={{ borderColor: fieldErrors.login ? '#ff4d4f' : undefined }}
                required
              />
              <input
                className="modal__input"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => handleFieldChange('password', e.target.value)}
                style={{ borderColor: fieldErrors.password ? '#ff4d4f' : undefined }}
                required
              />
              {error && <p style={{ color: '#ff4d4f', marginBottom: '10px', fontSize: '14px' }}>{error}</p>}
              <button 
                className="modal__btn-enter _hover01" 
                type="submit" 
                disabled={loading || !isFormValid}
                style={{ opacity: (!isFormValid || loading) ? 0.6 : 1, cursor: (!isFormValid || loading) ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Вход...' : 'Войти'}
              </button>
              <div className="modal__form-group">
                <p>Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;