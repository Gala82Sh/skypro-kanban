import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ColumnContainer = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  
  & p {
    color: ${colors.textSecondary};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
  
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;
