import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${props => props.theme?.colors?.cardBg || colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  
  background-color: ${props => {
    switch (props.$theme) {
      case 'Web Design': 
        return props.theme?.colors?.orangeBg || colors.orangeBg;
      case 'Research': 
        return props.theme?.colors?.greenBg || colors.greenBg;
      case 'Copywriting': 
        return props.theme?.colors?.purpleBg || colors.purpleBg;
      default: 
        return props.theme?.colors?.grayBg || colors.grayBg;
    }
  }};
  
  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${props => {
      switch (props.$theme) {
        case 'Web Design': 
          return props.theme?.colors?.orangeText || colors.orangeText;
        case 'Research': 
          return props.theme?.colors?.greenText || colors.greenText;
        case 'Copywriting': 
          return props.theme?.colors?.purpleText || colors.purpleText;
        default: 
          return props.theme?.colors?.grayText || colors.grayText;
      }
    }};
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  
  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme?.colors?.textSecondary || colors.textSecondary};
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${props => props.theme?.colors?.textPrimary || colors.textPrimary};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  & svg {
    width: 13px;
  }
  
  & img {
    width: 13px;
    height: 13px;
    margin-right: 4px;
  }
  
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${props => props.theme?.colors?.textSecondary || colors.textSecondary};
    letter-spacing: 0.2px;
  }
`;
