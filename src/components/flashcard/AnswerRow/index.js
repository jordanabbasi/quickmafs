import { useState } from 'react';
import './index.css';
import { TextField, Button } from '@material-ui/core';

export default function AnswerRow({ submitAnswer }) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAnswer(Number(answer));
    setAnswer('');
  }

  return (
    <div className="answer-row-container">
      <div className="fact-text">=</div>
      <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
        <TextField
          inputProps={{style: {marginLeft: '1rem', fontSize: '4rem', width: '8rem'}}}
          onChange={e => {setAnswer(e.target.value)}}
          value={answer}
          className="answer-text-field"
        />
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
}
