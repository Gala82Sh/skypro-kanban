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
    0% { height: 0; opacity: 0; }
    100% { height: auto; opacity: 1; }
  }

  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: calc(200px + 100%) 0; }
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pop-exit__exit-yes:hover {
    background-color: #33399b;
  }

  .pop-exit__exit-yes a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #FFFFFF;
  }

  .pop-exit__exit-no {
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid #565EEF;
    color: #565EEF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pop-exit__exit-no:hover {
    background-color: #33399b;
    border-color: #33399b;
  }

  .pop-exit__exit-no:hover a {
    color: #FFFFFF;
  }

  .pop-exit__exit-no a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #565EEF;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
  }

  .pop-new-card__ttl {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0;
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

  .pop-new-card__wrap {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .pop-new-card__form {
    max-width: 370px;
    width: 100%;
  }

  .pop-new-card .calendar {
    margin-right: 0;
    margin-left: auto;
  }

  .pop-new-card__categories {
    margin-left: 30px;
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
    padding: 40px 30px 48px 30px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
  }

  .pop-browse__top-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .pop-browse__ttl {
    font-size: 20px;
    font-weight: 600;
    line-height: 100%;
    margin: 0;
    width: 163px;
  }

  .pop-browse__ttl input {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 100%;
    width: 100%;
  }

  .status {
    margin-bottom: 30px;
  }

  .status__p {
    font-size: 14px;
    font-weight: 600;
    line-height: 100%;
    margin-bottom: 14px;
    width: 45px;
  }

  .status__themes {
    display: flex;
    flex-wrap: nowrap;
    gap: 14px;
    align-items: center;
  }

  .status__theme {
    padding: 10px 14px;
    border-radius: 24px;
    font-size: 14px;
    line-height: 10px;
    text-align: center;
    white-space: nowrap;
    background-color: transparent;
    color: #94A6BE;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    cursor: pointer;
  }

  .status__theme._active-status {
    background-color: #94A6BE;
    color: #FFFFFF;
    border: none;
  }

  .pop-browse__wrap {
    display: flex;
    gap: 21px;
    margin-bottom: 0;
    align-items: flex-start;
    width: 570px;
  }

  .pop-browse__form {
    max-width: 370px;
    width: 100%;
  }

  .form-browse__block {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 370px;
  }

  .form-browse__area {
    width: 100%;
    height: 200px;
    padding: 20px 14px;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -2%;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background-color: #EAEEF6;
    resize: vertical;
    font-family: inherit;
    color: #000000;
  }

  .form-browse__area::placeholder {
    color: #94A6BE66;
    font-size: 14px;
    letter-spacing: -2%;
  }

  .calendar {
    width: 168px;
    height: 228px;
    margin-top: 0;
    margin-right: 41px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
    background: #FFFFFF;
  }

  .pop-browse__btn-browse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
  }

  .btn-group {
    display: flex;
    gap: 8px;
  }

  ._btn-bg {
    background-color: #565EEF;
    border: none;
    border-radius: 4px;
    padding: 10px 14px;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: 0;
    text-align: center;
    height: 30px;
    box-sizing: border-box;
  }

  ._btn-bor {
    background-color: transparent;
    border: 0.7px solid #565EEF;
    border-radius: 4px;
    padding: 10px 14px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
    letter-spacing: -1%;
    text-align: center;
    color: #565EEF;
    cursor: pointer;
    height: 30px;
    white-space: nowrap;
    box-sizing: border-box;
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
    color: #000000;
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
    position: absolute;
    right: 30px;
    bottom: 48px;
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: 0;
    color: #FFFFFF;
    cursor: pointer;
    text-align: center;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
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
    color: #000000;
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

  /* ===== КАЛЕНДАРЬ ===== */
  .calendar__period {
    padding: 0 7px;
    margin-top: 10px;
  }

  .calendar__p {
    color: #94A6BE;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 1%;
    text-align: center;
    margin: 0;
  }

  .calendar__p .date-control,
  .calendar__p span.date-control {
    color: #000000;
    font-weight: 700;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0;
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


  body.dark-theme {
    background-color: #000000 !important;
  }

  body.dark-theme .wrapper,
  body.dark-theme main {
    background-color: #151419 !important;
  }

  body.dark-theme .sc-gtstET.dVGquP {
    background-color: #20202C !important;
  }

  
  body.dark-theme .sc-gtstET,
  body.dark-theme .ldkZjf,
  body.dark-theme .cards__card {
    background-color: #20202C !important;
  }

 
  body.dark-theme .sc-gKzYWW,
  body.dark-theme .card__title,
  body.dark-theme .pop-browse__ttl,
  body.dark-theme .pop-new-card__ttl,
  body.dark-theme .subttl,
  body.dark-theme .categories__p,
  body.dark-theme .calendar__ttl,
  body.dark-theme .status__p,
  body.dark-theme label.subttl,
  body.dark-theme .form-new__block .subttl,
  body.dark-theme .pop-new-card__categories .subttl {
    color: #FFFFFF !important;
  }

  body.dark-theme .sc-iCoKjR p,
  body.dark-theme .card__date p {
    color: #94A6BE !important;
  }

 
  body.dark-theme .calendar,
  body.dark-theme .pop-browse__block,
  body.dark-theme .pop-new-card__block,
  body.dark-theme .pop-exit__block {
    background-color: #20202C !important;
  }

  body.dark-theme .calendar__cell {
    color: #94A6BE !important;
  }

  body.dark-theme .calendar__cell._active-day {
    background-color: #94A6BE !important;
    color: #151419 !important;
  }

  body.dark-theme .calendar__cell._cell-day:hover {
    background-color: #4E5566 !important;
    color: #FFFFFF !important;
  }

  body.dark-theme .calendar__month,
  body.dark-theme .calendar__day-name {
    color: #94A6BE !important;
  }

  body.dark-theme .nav__action svg {
    fill: #94A6BE !important;
  }

  body.dark-theme .calendar__p .date-control,
  body.dark-theme .calendar__p span.date-control {
    color: #FFFFFF !important;
  }

 
  body.dark-theme .form-browse__area {
    background-color: #151419 !important;
    color: #94A6BE !important;
    border-color: #4E5566 !important;
  }

  body.dark-theme .form-browse__area:not([readonly]) {
    background-color: #20202C !important;
    color: #FFFFFF !important;
  }

  body.dark-theme .form-new__input,
  body.dark-theme .form-new__area {
    background-color: #20202C !important;
    color: #FFFFFF !important;
    border-color: #4E5566 !important;
  }

  body.dark-theme .form-new__input::placeholder,
  body.dark-theme .form-new__area::placeholder {
    color: #94A6BE !important;
  }

  body.dark-theme .modal__input {
    background-color: #20202C !important;
    color: #94A6BE !important;
    border-color: #4E5566 !important;
  }

  body.dark-theme .modal__input::placeholder {
    color: #94A6BE !important;
  }

  body.dark-theme .pop-browse__ttl input {
    background-color: #20202C !important;
    color: #FFFFFF !important;
    border-radius: 4px !important;
    padding: 4px 8px !important;
  }

 
  body.dark-theme ._orange {
    background-color: #FF6D00 !important;
    color: #FFE4C2 !important;
  }

  body.dark-theme ._green {
    background-color: #06B16E !important;
    color: #B4FDD1 !important;
  }

  body.dark-theme ._purple {
    background-color: #9A48F1 !important;
    color: #E9D4FF !important;
  }

  body.dark-theme ._gray {
    background-color: #94A6BE !important;
    color: #FFFFFF !important;
  }

 
  body.dark-theme ._btn-bg,
  body.dark-theme .form-new__create {
    background-color: #565EEF !important;
    color: #FFFFFF !important;
  }

  body.dark-theme ._btn-bor {
    background-color: transparent !important;
    border: 0.7px solid #FFFFFF !important;
    color: #FFFFFF !important;
  }

  body.dark-theme ._btn-bor:hover {
    background-color: #33399b !important;
    border-color: #33399b !important;
    color: #FFFFFF !important;
  }

 
  body.dark-theme .status__theme {
    background-color: transparent !important;
    border-color: #4E5566 !important;
    color: #94A6BE !important;
  }

  body.dark-theme .status__theme._active-status {
    background-color: #94A6BE !important;
    color: #151419 !important;
  }

  body.dark-theme .status__theme._active-status p {
    color: #151419 !important;
  }

body.dark-theme .sc-gKzYWW.grscAK {
  background-color: #202229 !important;
  border-color: #4E5566 !important;
}

body.dark-theme .sc-iCoKjR.hDSnxY {
  color: #FFFFFF !important;
}

body.dark-theme .sc-fujBio.cuDqWn {
  color: #FFFFFF !important;
}

body.dark-theme .sc-pNYLI.jbXqJS p {
  color: #FFFFFF !important;
}

body.dark-theme .sc-pNYLI.jbXqJS input[type="checkbox"] {
  background: #FFFFFF !important;
}

body.dark-theme .sc-pNYLI.jbXqJS input[type="checkbox"]::before {
  background-color: #94A6BE !important;
}

body.dark-theme .sc-pNYLI.jbXqJS input:checked::before {
  background-color: #565EEF !important;
  left: 12px !important;
}

body.dark-theme .sc-jrsLQV.ienRxJ {
  background: transparent !important;
  border: 1px solid #FFFFFF !important;
  color: #FFFFFF !important;
}

body.dark-theme .sc-jrsLQV.ienRxJ:hover {
  background-color: #565EEF !important;
  border-color: #565EEF !important;
}

body.dark-theme .sc-jrsLQV.ienRxJ a {
  color: #FFFFFF !important;
}

body.dark-theme .sc-jrsLQV.ienRxJ:hover a {
  color: #FFFFFF !important;
}

  body.dark-theme [class*="PopUserName"],
  body.dark-theme [class*="PopUserMail"],
  body.dark-theme [class*="PopUserTheme"] p {
    color: #FFFFFF !important;
  }

  body.dark-theme [class*="PopUserTheme"] input[type="checkbox"] {
    background: #4E5566 !important;
  }

  body.dark-theme [class*="PopUserTheme"] input[type="checkbox"]::before {
    background-color: #94A6BE !important;
  }

  body.dark-theme [class*="PopUserTheme"] input:checked::before {
    background-color: #565EEF !important;
    left: 12px !important;
  }

  body.dark-theme [class*="PopUserBtn"] {
    background: transparent !important;
    border: 1px solid #FFFFFF !important;
    color: #FFFFFF !important;
  }

  body.dark-theme [class*="PopUserBtn"]:hover {
    background-color: #565EEF !important;
    border-color: #565EEF !important;
  }

  body.dark-theme [class*="PopUserBtn"] a {
    color: #FFFFFF !important;
  }

  body.dark-theme [class*="PopUserBtn"]:hover a {
    color: #FFFFFF !important;
  }

  body.dark-theme .sc-jSFhYz.iZhoxL {
    color: #FFFFFF !important;
  }

  body.dark-theme .sc-jSFhYz.iZhoxL::after {
    border-left-color: #FFFFFF !important;
    border-bottom-color: #FFFFFF !important;
  }

  .logo-text {
    color: #000000 !important;
  }

  body.dark-theme .logo-text {
    color: #FFFFFF !important;
  }

  body.dark-theme .pop-exit__ttl h2 {
    color: #FFFFFF !important;
  }

  body.dark-theme .pop-exit__exit-no {
    background: transparent !important;
    border: 1px solid #FFFFFF !important;
    color: #FFFFFF !important;
  }

  body.dark-theme .pop-exit__exit-no a {
    color: #FFFFFF !important;
  }

  body.dark-theme .pop-exit__exit-no:hover {
    background-color: #565EEF !important;
    border-color: #565EEF !important;
  }

  body.dark-theme .pop-exit__exit-no:hover a {
    color: #FFFFFF !important;
  }

  .pop-new-card,
  .pop-browse,
  .pop-exit {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: none;
  }

  .pop-new-card:target,
  .pop-browse:target,
  .pop-exit:target {
    display: block;
  }

  body.dark-theme .pop-new-card,
  body.dark-theme .pop-browse,
  body.dark-theme .pop-exit {
    background: rgba(0, 0, 0, 0.7) !important;
  }

  body.dark-theme .pop-new-card__container,
  body.dark-theme .pop-browse__container,
  body.dark-theme .pop-exit__container {
    background: transparent !important;
  }

  body.dark-theme .pop-new-card__block,
  body.dark-theme .pop-browse__block,
  body.dark-theme .pop-exit__block {
    background-color: #20202C !important;
    border-color: #4E5566 !important;
  }

  body.dark-theme .form-new__input,
  body.dark-theme .form-new__area,
  body.dark-theme .form-browse__area {
    background-color: #151419 !important;
    color: #FFFFFF !important;
    border-color: #4E5566 !important;
  }

  body.dark-theme .categories__p,
  body.dark-theme .subttl {
    color: #FFFFFF !important;
  }

  body.dark-theme [class*="CardDate"] p,
  body.dark-theme [class*="sc-fnWaXB"] p {
    color: #94A6BE !important;
  }

  body.dark-theme .modal__block {
    background-color: #20202C !important;
    border-color: #4E5566 !important;
  }

  body.dark-theme .modal__ttl h2 {
    color: #FFFFFF !important;
  }

  body.dark-theme .modal__btn-enter,
  body.dark-theme .modal__btn-signup-ent {
    background-color: #565EEF !important;
    color: #FFFFFF !important;
  }

  body.dark-theme .modal__btn-enter:hover,
  body.dark-theme .modal__btn-signup-ent:hover {
    background-color: #33399b !important;
  }

  body.dark-theme .modal__form-group p,
  body.dark-theme .modal__form-group a {
    color: #94A6BE !important;
  }

  body.dark-theme .modal__form-group a:hover {
    color: #565EEF !important;
  }
    
  body.dark-theme .card__date svg path,
  body.dark-theme [class*="CardDate"] svg path {
    stroke: #94A6BE !important;
  }

  body.dark-theme .card__date svg circle,
  body.dark-theme [class*="CardDate"] svg circle {
    fill: #94A6BE !important;
  }

`;