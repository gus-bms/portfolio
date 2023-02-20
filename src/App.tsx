import { useEffect } from 'react';
import Header from './component/Header';
import Main from './Main';
import Footer from './component/Footer';
import './App.scss';

function App() {
  document.documentElement.setAttribute("data-theme", "light");
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
