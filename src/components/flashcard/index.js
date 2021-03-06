import { useState } from 'react';
import UIfx from 'uifx';
import correctAudio from '../../sounds/snap.wav';
import incorrectAudio from '../../sounds/buzzer.wav';
import './index.css';
import Fact from './Fact';
import AnswerRow from './AnswerRow';
import EmojiContainer from './EmojiContainer';
import { Paper } from '@material-ui/core';
import { getTwoRandomNonzeroDigits, isCorrectSum } from '../../utils';

export default function Flashcard({ streak, setStreak, muted }) {
  const [answer, setAnswer] = useState('');
  const [paused, setPaused] = useState('');
  const [nums, setNums] = useState(getTwoRandomNonzeroDigits());

  const sounds = {
    correct: new UIfx(correctAudio),
    incorrect: new UIfx(incorrectAudio),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = isCorrectSum(nums, Number(answer));
    const statusString = correct ? 'correct' : 'incorrect';
    setStreak(streak => {
      return correct ? streak + 1 : 0;
    })
    setPaused(statusString);
    if (!muted) {
      sounds[statusString].play();
    }

    const pauseTime = correct ? 800 : 1200;
    setTimeout(getNextFact, pauseTime);
  }

  const getNextFact = () => {
    setPaused('');
    setAnswer('');
    setNums(getTwoRandomNonzeroDigits);
  }

  return (
    <div className="flashcard-container">
      <Paper className="flashcard" elevation={5}>
        <Fact nums={nums} />
        <AnswerRow answer={answer} setAnswer={setAnswer} handleSubmit={handleSubmit} />
        <EmojiContainer show={!!paused} streak={streak} />
      </Paper>
    </div>
  );
}
