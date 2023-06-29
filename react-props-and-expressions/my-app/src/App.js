import './App.css';
import CustomButton from './CustomButton';
function App() {
  return (
    <div className="App">
      <CustomButton className="btn-i" name="I" color="red" />
      <CustomButton className="btn-know" name="know" color="green" />
      <CustomButton className="btn-react" name="React!" color="lightblue" />
    </div>
  );
}

export default App;
