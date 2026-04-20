import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${colors.bgHeader};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const Logo = styled.div`
  & img {
    width: 85px;
  }
`;

export const Nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${colors.btnPrimaryBg};
  color: ${colors.btnPrimaryText};
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  
  & a {
    color: ${colors.btnPrimaryText};
  }
  
  &:hover {
    background-color: ${colors.btnPrimaryHover};
  }
`;

export const User = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.btnPrimaryBg};
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${colors.btnPrimaryBg};
    border-bottom: 1.9px solid ${colors.btnPrimaryBg};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  
  &:hover {
    color: ${colors.btnPrimaryHover};
    
    &::after {
      border-left-color: ${colors.btnPrimaryHover};
      border-bottom-color: ${colors.btnPrimaryHover};
    }
  }
`;

export const PopUserSet = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${colors.borderInput};
  background: ${colors.white};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserName = styled.p`
  color: ${colors.textPrimary};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: ${colors.textSecondary};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  
  & p {
    color: ${colors.textPrimary};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
  
  & input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #EAEEF6;
    outline: none;
    appearance: none;
    
    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${colors.textSecondary};
      transition: 0.5s;
    }
    
    &:checked::before {
      left: 12px;
    }
  }
`;

export const PopUserBtn = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${colors.btnPrimaryBg};
  border-radius: 4px;
  border: 1px solid ${colors.btnPrimaryBg};
  
  & a {
    color: ${colors.btnPrimaryBg};
  }
`;