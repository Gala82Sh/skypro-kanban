import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';
import { useAuth } from '../contexts/AuthContext';

function SignUpPage() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ name: false, login: false, password: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    return re.test(email);
  };

  const isFormValid = () => {
    return name.trim() !== '' && 
           login.trim() !== '' && 
           isValidEmail(login) && 
           password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    
    const newFieldErrors = {
      name: name.trim() === '',
      login: login.trim() === '' || !isValidEmail(login),
      password: password.length < 6,
    };
    setFieldErrors(newFieldErrors);
    
    if (newFieldErrors.name) {
      setError('Пожалуйста, укажите имя');
      return;
    }
    if (newFieldErrors.login) {
      setError('Пожалуйста, укажите корректный email');
      return;
    }
    if (newFieldErrors.password) {
      setError('Пароль должен содержать не менее 6 символов');
      return;
    }
    
    setLoading(true);

    try {
      const userData = await signUp({ name, login, password });
      if (userData) {
        authLogin(userData.token, userData.name, login);
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
      setFieldErrors({ name: true, login: true, password: true });
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (field, value) => {
    if (field === 'name') setName(value);
    if (field === 'login') setLogin(value);
    if (field === 'password') setPassword(value);
    if (fieldErrors[field]) {
      setFieldErrors({ ...fieldErrors, [field]: false });
    }
    if (error) setError('');
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="modal__input"
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => handleFieldChange('name', e.target.value)}
                style={{ borderColor: fieldErrors.name ? '#ff4d4f' : undefined }}
                required
              />
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
                placeholder="Пароль (минимум 6 символов)"
                value={password}
                onChange={(e) => handleFieldChange('password', e.target.value)}
                style={{ borderColor: fieldErrors.password ? '#ff4d4f' : undefined }}
                required
              />
              {error && <p style={{ color: '#ff4d4f', marginBottom: '10px', fontSize: '14px' }}>{error}</p>}
              <button 
                className="modal__btn-signup-ent _hover01" 
                type="submit" 
                disabled={loading || !isFormValid()}
                style={{ opacity: (!isFormValid() || loading) ? 0.6 : 1, cursor: (!isFormValid() || loading) ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Регистрация...' : 'Зарегистрироваться'}
              </button>
              <div className="modal__form-group">
                <p>Уже есть аккаунт? <Link to="/login">Войдите</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
