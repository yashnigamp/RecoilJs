import logo from './logo.svg';
import './App.css';
import { useRecoilState } from 'recoil';
import {charAtom} from "../src/StoreComponent/atom"
import { About } from './About';
import { LengthSelector } from './LengthStatusSelector';

function App() {
  const [text,setText] = useRecoilState(charAtom);
  
  return (
    <div className="App">
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      <h3>
        {text}
      </h3>
      <About/>
      <LengthSelector/>
    </div>
  );
}

export default App;
