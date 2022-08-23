import './assets/generalScss/App.scss';

import { Header } from './components/generalComponents/Header';
import { MainPage } from './components/pages/MainPage';

function App() {
  return (
    <div>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
