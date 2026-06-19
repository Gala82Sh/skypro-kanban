import styled from 'styled-components';

const SLoader = styled.div`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  border-radius: 8px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loaderShimmer 1.5s infinite;
  
  @keyframes loaderShimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  
  body.dark-theme & {
    background: linear-gradient(90deg, #4a4a4a 25%, #6a6a6a 50%, #4a4a4a 75%);
    background-size: 200% 100%;
  }
`;

const Loader = ({ width = 220, height = 20 }) => {
  return <SLoader $width={width} $height={height} />;
};

export default Loader;