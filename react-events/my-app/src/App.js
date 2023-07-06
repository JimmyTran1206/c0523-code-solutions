import './App.css';
import CustomButton from './CustomButton';

function App() {
  const handleCustomClick = (text) => {
    alert(`Click ${text}`);
  };
  return (
    <div>
      <CustomButton
        color="red"
        text="Fancy"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="green"
        text="Dream"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="blue"
        text="Button"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
