import './App.css';
import hornedCreatures from './data.js';
import Header from './Header.js';
import CreaturesList from './CreaturesList.js';

function App() {
  return (
    <div className="main">
      <Header title="Horned Creatures"/>
      <CreaturesList creatures={hornedCreatures}/>
    </div>
  );
}

export default App;
