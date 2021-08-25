import { useState } from 'react';
import './App.css';
import Header from './Header';
import Flashcard from './Flashcard';
import Streak from './Streak';

function App() {

  const [streak, setStreak] = useState(0);

  return (
    <div className="App">
      <Header />
      <Streak streak={streak}/>
      <Flashcard streak={streak} setStreak={setStreak}/>
    </div>
  );
}

export default App;
