import './App.css';
import Title from './components/Title';
import EntireAmounts from './components/EntireAmounts';
import Notification from './components/Notification';
import InputForm from './components/InputForm';
import BudgetsList from './components/BudgetsList';

function App() {
  return (
    <div className="App">
      <Title/>
      <div className="white-box">
        <InputForm/>
        <BudgetsList/>
      </div>
      <EntireAmounts/>
      <Notification/>
    </div>
  );
}

export default App;
