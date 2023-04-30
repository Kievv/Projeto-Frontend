import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Tabela from './components/tabela/Tabela';

function App() {
  return (
    <>
      <Header />
      
      <Tabela />
    </>
  )
}

export default App;
