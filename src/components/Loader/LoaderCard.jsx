import styled from 'styled-components';
import Loader from './Loader';

const CardSkeleton = styled.div`
  width: 220px;
  height: 130px;
  border-radius: 10px;
  padding: 15px 13px 19px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  
  
  body.dark-theme & {
    background-color: #20202C;
  }
`;

const LoaderCard = () => {
  return (
    <CardSkeleton>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Loader width={60} height={20} />
        <Loader width={24} height={24} />
      </div>
      <div>
        <Loader width={140} height={18} />
        <div style={{ marginTop: '10px' }}>
          <Loader width={80} height={13} />
        </div>
      </div>
    </CardSkeleton>
  );
};

export default LoaderCard;
