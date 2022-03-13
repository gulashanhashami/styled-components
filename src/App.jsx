
import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
     <div id='btn'>
     <Button id='btn1'>Primary Button</Button>
     <Button id='btn2'>Default Button</Button>
     <Button id='btn3'>Dashed Button</Button>
     <Button id='btn4'>Text Button</Button>
     <Button id='btn5'>Link Button</Button>
     </div>
    </div>
  );
}

export default App;
