import React from 'react';
import Body from './components/body/body'; // Asegúrate de que la ruta sea correcta
import Footer from './components/footer/footer';
import Header from './components/header/header'

function App2() {
  return (
    <div className="App">
        <Header />
        <Body />
        <Footer />    
    </div>
  );
}

export default App2;
