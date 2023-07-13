import './App.css';
import Carousel from './Carousel';
const images = [
  {
    id: 0,
    name: 'pokemon 1',
    src: './images/001.png',
    alt: 'pokemon001',
  },
  {
    id: 1,
    name: 'pokemon 2',
    src: './images/004.png',
    alt: 'pokemon004',
  },
  {
    id: 2,
    name: 'pokemon 3',
    src: './images/007.png',
    alt: 'pokemon007',
  },
  {
    id: 3,
    name: 'pokemon 4',
    src: './images/025.png',
    alt: 'pokemon025',
  },
  {
    id: 4,
    name: 'pokemon 5',
    src: './images/039.png',
    alt: 'pokemon039',
  },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel images={images} />
      </header>
    </div>
  );
}

export default App;
