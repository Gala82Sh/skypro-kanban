import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: ${colors.textPrimary};
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${colors.bgWrapper};
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  @media screen and (max-width: 495px) {
    .container {
      width: 100%;
      padding: 0 16px;
    }
  }

  
  .pop-new-card,
  .pop-browse,
  .pop-exit {
    display: none;
  }

 
  .pop-new-card:target,
  .pop-browse:target,
  .pop-exit:target {
    display: block;
  }
    .form-new__input,
  .form-new__area {
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    font-family: inherit;
  }

  .form-new__input::placeholder,
  .form-new__area::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94A6BE;
  }

  .form-new__input {
    margin: 20px 0;
  }

  .form-new__area {
    margin-top: 14px;
    height: 200px;
    resize: vertical;
  }

  .form-new__create {
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    float: right;
    cursor: pointer;
  }

  .form-new__create:hover {
    background-color: #33399b;
  }

  .subttl {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }

  
  .categories {
    margin-bottom: 20px;
  }

  .categories__themes {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 7px;
  }

  .categories__p {
    margin-bottom: 14px;
  }

  .categories__theme {
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .categories__theme p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }

  .categories__theme._active-category {
    opacity: 1 !important;
  }

  ._orange {
    background-color: #FFE4C2;
    color: #FF6D00;
  }

  ._green {
    background-color: #B4FDD1;
    color: #06B16E;
  }

  ._purple {
    background-color: #E9D4FF;
    color: #9A48F1;
  }

  ._gray {
    background: #94A6BE;
    color: #FFFFFF;
  }

  
  .pop-exit__container {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
  }

  .pop-exit__block {
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  }

  .pop-exit__ttl h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }

  .pop-exit__exit-yes {
    width: 153px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    margin-right: 10px;
    cursor: pointer;
  }

  .pop-exit__exit-yes:hover {
    background-color: #33399b;
  }

  .pop-exit__exit-no {
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid #565EEF;
    color: #565EEF;
    cursor: pointer;
  }

  .pop-exit__exit-no:hover {
    background-color: #33399b;
    color: #FFFFFF;
    border-color: #33399b;
  }

  .pop-exit__form-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

 
  .modal__block {
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  }

  .modal__ttl h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }

  .modal__input {
    width: 100%;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    outline: none;
    padding: 10px 8px;
    margin-bottom: 7px;
    font-family: inherit;
  }

  .modal__input::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94A6BE;
  }

  .modal__btn-enter {
    width: 100%;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
  }

   .modal__btn-signup-ent {
    width: 100%;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
  }

  .modal__btn-signup-ent:hover {
    background-color: #33399b;
  }

  .modal__btn-enter:hover {
    background-color: #33399b;
  }

  .modal__form-group {
    text-align: center;
  }

  .modal__form-group p,
  .modal__form-group a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
  }

  .modal__form-group a {
    text-decoration: underline;
  }
     .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container-signin,
  .container-signup {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 70px); 
  }
    
`;