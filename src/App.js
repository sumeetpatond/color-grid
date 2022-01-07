import { useState } from 'react';
import './App.css';
import Row from './components/Row';

function App() {
  const [firstActive, setFirstActive] = useState({rowid:null, boxid:null})
  const [secondActive, setSecondActive] = useState({rowid:null, boxid:null})
  const handleClick = (rowid, boxid) => {
    if(secondActive.rowid === rowid && secondActive.boxid === boxid) return;
    setFirstActive(secondActive);
    setSecondActive({rowid, boxid})
  }
  return (
    <div className="App">
      <Row rowid="0" handleClick={handleClick} firstActive={firstActive} secondActive={secondActive}/>
      <Row rowid="1" handleClick={handleClick} firstActive={firstActive} secondActive={secondActive}/>
      <Row rowid="2" handleClick={handleClick} firstActive={firstActive} secondActive={secondActive}/>
      <Row rowid="3" handleClick={handleClick} firstActive={firstActive} secondActive={secondActive}/>
    </div>
  );
}

export default App;
