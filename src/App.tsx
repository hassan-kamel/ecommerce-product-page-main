import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import './scss/style.scss';

interface IAppContext {
  orderCounter: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  return (
    <AppContext.Provider value={{ orderCounter: 3 }}>
      <Navbar />
    </AppContext.Provider>
  );
}

export default App;
