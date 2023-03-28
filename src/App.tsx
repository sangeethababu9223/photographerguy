import React from 'react';
import './App.scss';
import RouterModule from './routerModule/RouterModule';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
        <div className='main-container container--max-1400'>
          <RouterModule/>
        </div>
      <Footer />
    </div>
  );
}

export default App;
