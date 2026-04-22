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

  html, body {
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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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

  .container-signin,
  .container-signup {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 70px);
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

  .pop-new-card__container {
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

  .pop-new-card__block {
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
  }

  .pop-new-card__content {
    display: block;
    text-align: left;
  }

  .pop-new-card__ttl {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
  }

  .pop-new-card__close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;
  }

  .pop-new-card__close:hover {
    color: #000000;
  }

  .pop-browse__container {
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

  .pop-browse__block {
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
  }

  .form-new__block {
    display: flex;
    flex-direction: column;
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
    margin-bottom: 20px;
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: 58px;
    height: 30px;
    padding: 0 12px;
    border-radius: 24px;
    opacity: 0.4;
    cursor: pointer;
    transition: opacity 0.2s;
    border: none;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 14.21px;
    letter-spacing: -0.14px;
    text-align: center;
  }

  .categories__theme p {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
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

  .modal__btn-enter,
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

  .modal__btn-enter:hover,
  .modal__btn-signup-ent:hover {
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

  .calendar {
    width: 182px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
    background: #FFFFFF;
  }

  .calendar__period {
    padding: 0 7px;
    margin-top: 10px;
  }

  .calendar__p {
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
  }

  .calendar__p span {
    color: #000000;
  }

  .calendar__cells {
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
  }

  .calendar__cell {
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94A6BE;
    font-size: 10px;
    cursor: pointer;
  }

  .calendar__month {
    color: #94A6BE;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }

  .calendar__nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;
  }

  .nav__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .nav__action {
    width: 18px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav__action svg {
    fill: #94A6BE;
  }

  .calendar__days-names {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
  }

  .calendar__day-name {
    color: #94A6BE;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
  }

  .calendar__cell._cell-day:hover {
    color: #94A6BE;
    background-color: #EAEEF6;
  }

  .calendar__cell._active-day {
    background-color: #94A6BE;
    color: #FFFFFF;
  }

  .calendar__cell._current {
    font-weight: 700;
  }

  .calendar__cell._other-month {
    opacity: 0;
  }

  .pop-new-card__wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 21px;
    margin-bottom: 20px;
  }

  .pop-new-card__form {
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;