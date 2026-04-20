import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;