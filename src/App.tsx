import './assets/generalScss/App.scss';
import { Footer } from './components/generalComponents/Footer';

import { Header } from './components/generalComponents/Header';
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
