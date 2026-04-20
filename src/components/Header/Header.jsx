import { useState } from 'react';
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

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          <Logo className="_show _light">
            <a href="/" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </Logo>
          <div className="header__logo _dark">
            <a href="/" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <Nav>
            <BtnMainNew>
              <a href="#popNewCard">Создать новую задачу</a>
            </BtnMainNew>
            <User onClick={togglePopup}>
              Ivan Ivanov
            </User>
            <PopUserSet $isOpen={isPopupOpen}>
              <PopUserName>Ivan Ivanov</PopUserName>
              <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
              <PopUserTheme>
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </PopUserTheme>
              <PopUserBtn>
                <a href="#popExit">Выйти</a>
              </PopUserBtn>
            </PopUserSet>
          </Nav>
        </HeaderBlock>
      </div>
    </StyledHeader>
  );
}

export default Header;