import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from '../../contexts/ThemeContext';
import {
  StyledHeader,
  HeaderBlock,
  Logo,
  Nav,
  BtnMainNew,
  User,
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserBtn,
} from './Header.styled';

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { userName, isAuth } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  if (!isAuth) return null;

  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          {}
          <Logo>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img 
                src="/images/Logo (1).png" 
                alt="logo" 
                style={{ height: '17.18px', width: 'auto' }}
              />
              <span className="logo-text">
                skypro
              </span>
            </Link>
          </Logo>

          <Nav>
            <BtnMainNew>
              <Link to="/card/add">Создать новую задачу</Link>
            </BtnMainNew>
            <User onClick={togglePopup}>
              {userName || 'Пользователь'}
            </User>
            <PopUserSet $isOpen={isPopupOpen}>
              <PopUserName>{userName || 'Пользователь'}</PopUserName>
              <PopUserMail>{localStorage.getItem('userEmail') || 'user@example.com'}</PopUserMail>
              <PopUserTheme>
                <p>Темная тема</p>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                  checked={isDark}
                  onChange={toggleTheme}
                />
              </PopUserTheme>
              <PopUserBtn>
                <Link to="/exit">Выйти</Link>
              </PopUserBtn>
            </PopUserSet>
          </Nav>
        </HeaderBlock>
      </div>
    </StyledHeader>
  );
}

export default Header;