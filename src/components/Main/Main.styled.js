import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledMain = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px); 
  background-color: ${colors.bgMain};
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const LoadingText = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: ${colors.textSecondary};
`;