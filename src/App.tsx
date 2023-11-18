import React from 'react';
import "./Assets/Scss/style.scss"
import Header from './components/header';
import AiCardPage from './template/aiGiftCard';
import Footer from './components/Footer';
import GiftForm from './template/giftForm';
import Routing from './routes';
import { useLocation } from 'react-router-dom';
function App() {
  const location=useLocation()
  
  return (
    <div className="App">
      <Header />
      <main id="mainContent">
        <Routing />
      </main>
       {location.pathname=="/"?"":<Footer />}
    </div>
  );
}

export default App;
