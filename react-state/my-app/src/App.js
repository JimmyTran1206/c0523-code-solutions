import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleButton color="red" text="button" />
        <ToggleButton color="green" text="button" />
        <ToggleButton color="blue" text="button" />
      </header>
    </div>
  );
}

export default App;
