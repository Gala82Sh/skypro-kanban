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
  background-color: ${colors.white};
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
      case 'Web Design': return colors.orangeBg;
      case 'Research': return colors.greenBg;
      case 'Copywriting': return colors.purpleBg;
      default: return colors.grayBg;
    }
  }};
  
  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${props => {
      switch (props.$theme) {
        case 'Web Design': return colors.orangeText;
        case 'Research': return colors.greenText;
        case 'Copywriting': return colors.purpleText;
        default: return colors.grayText;
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
    background-color: ${colors.textSecondary};
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
  color: ${colors.textPrimary};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  & svg {
    width: 13px;
  }
  
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${colors.textSecondary};
    letter-spacing: 0.2px;
  }
`;