import { useState } from 'react';
import './App.css';
import Header from './header';
import Flashcard from './flashcard';
import Streak from './Streak';

function App() {

  const [streak, setStreak] = useState(0);

  return (
    <div className="App">
      <Header />
      <Streak streak={streak}/>
      <Flashcard setStreak={setStreak}/>
    </div>
  );
}

export default App;
