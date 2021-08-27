import { useState } from 'react';
import './App.css';
import Header from './Header';
import Flashcard from './Flashcard';
import Streak from './Streak';

function App() {

  const [streak, setStreak] = useState(0);
  const [muted, setMuted] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Header />
      <Streak streak={streak} muted={muted} setMuted={setMuted} />
      <Flashcard streak={streak} setStreak={setStreak} muted={muted} />
    </div>
  );
}

export default App;
