import React from 'react';
import MainScreen from './components/MainScreen';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <MainScreen />
      <div className="container">
        {/* Contenu supplémentaire */}
      </div>
    </div>
  );
};

export default App;
