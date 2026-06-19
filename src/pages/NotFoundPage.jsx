import { Link } from 'react-router-dom';
import { StyledMain, MainBlock } from '../components/Main/Main.styled';
import { useTheme } from '../contexts/ThemeContext';

function NotFoundPage() {
  const { isDark } = useTheme();

  return (
    <StyledMain>
      <div className="container">
        <MainBlock>
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            {}
            <h1 style={{ 
              fontSize: '120px', 
              fontWeight: '700', 
              marginBottom: '20px',
              color: isDark ? '#FFFFFF' : '#000000',
              lineHeight: '1'
            }}>
              404
            </h1>
            
            {}
            <h2 style={{ 
              marginBottom: '15px', 
              fontSize: '28px',
              color: isDark ? '#FFFFFF' : '#000000'
            }}>
              Страница не найдена
            </h2>
            
            {}
            <p style={{ 
              marginBottom: '30px', 
              color: '#94A6BE', 
              fontSize: '16px',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Запрашиваемая страница не существует или была удалена
            </p>
            
            {}
            <Link to="/">
              <button 
                className="_btn-bg _hover01" 
                style={{ 
                  padding: '12px 24px', 
                  fontSize: '16px', 
                  cursor: 'pointer',
                  border: 'none',
                  borderRadius: '4px'
                }}
              >
                ← Вернуться на главную
              </button>
            </Link>
          </div>
        </MainBlock>
      </div>
    </StyledMain>
  );
}

export default NotFoundPage;