import React from 'react';
import './App.css';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Detalle de Producto</h1>       
        <ProductDetail />
      </header>
    </div>
  );
}

export default App;
