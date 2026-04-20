import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          <Logo className="_show _light">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </Logo>
          <div className="header__logo _dark">
            <Link to="/">
              <img src="/images/logo_dark.png" alt="logo" />
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
                <input type="checkbox" className="checkbox" name="checkbox" />
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