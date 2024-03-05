import React from 'react';
import './App.css';
import Title from './components/Title';
import BudgetsContainerEl from './components/BudgetsContainerEl';

function App() {
  return (
    <div className="App">
      
      <Title/>
      
      <BudgetsContainerEl/>

      <footer>
      </footer>

    </div>
  );
}

export default App;
