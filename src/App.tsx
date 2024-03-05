import React from 'react';
import './App.css';
import Title from './components/Title';
import BudgetsContainer from './components/BudgetsContainer';

function App() {
  return (
    <div className="App">
      
      <Title/>

      <BudgetsContainer/>

      <footer>
      </footer>

    </div>
  );
}

export default App;
