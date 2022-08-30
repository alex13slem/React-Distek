import './assets/generalScss/app.scss';
import { Footer } from './components/common/footer';

import { Header } from './components/common/header';
import { MainPage } from './components/pages/mainPage';

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
