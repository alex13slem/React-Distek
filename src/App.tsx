import './assets/generalScss/App.scss';
import { Header } from './components/common/header';
import { Footer } from './components/common/footer';
import { MainPage } from './components/pages/MainPage';

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
