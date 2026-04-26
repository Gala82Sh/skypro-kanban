import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgMain};
`;

export const GradientText = styled.div`
  font-size: 16px;
  font-weight: 500;
  background: linear-gradient(90deg, #C1CDDC, #E9EEF7, #C1CDDC);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shimmer} 1.8s infinite;
`;
