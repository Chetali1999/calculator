import './App-module.css';
import ButtonContainer from './Components/Buttons-container';
import Display from './Components/Display';

function App() {
  return (
    <div className='calculator'>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
