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
          <Logo className="_show _light">
            <Link to="/">
              skypro
            </Link>
          </Logo>

          {}
          <div className="header__logo _dark" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img 
                src="/images/Logo (1).png" 
                alt="logo" 
                style={{ height: '17.18px', width: 'auto' }}
              />
              <span style={{ 
                width: '84.13px', 
                height: '17.18px', 
                display: 'inline-block', 
                lineHeight: '17.18px',
                color: '#FFFFFF',
                fontFamily: 'inherit'
              }}>
                skypro
              </span>
            </Link>
          </div>

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