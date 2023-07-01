import './App.css';
import RoratingBanner from './RotatingBanner';
const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RoratingBanner itemList={items} />
      </header>
    </div>
  );
}

export default App;
