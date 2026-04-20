import { useNavigate } from 'react-router-dom';

function ExitPage({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate('/login');
  };

  const handleCancel = () => {
    navigate(-1); 
  };

  return (
    <div className="pop-exit" style={{ display: 'block' }}>
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <div className="pop-exit__form-group">
            <button className="pop-exit__exit-yes _hover01" onClick={handleLogout}>Да, выйти</button>
            <button className="pop-exit__exit-no _hover03" onClick={handleCancel}>Нет, остаться</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExitPage;