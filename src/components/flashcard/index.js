import './index.css';
import Fact from './fact';
import AnswerRow from './AnswerRow';
import { Paper } from '@material-ui/core';
import { getTwoRandomNonzeroDigits } from '../../utils';

export default function Flashcard({ setStreak }) {
  const [num1, num2] = getTwoRandomNonzeroDigits();

  const submitAnswer = (answer) => {
    if (num1 + num2 === answer) {
      console.log("correct!");
      setStreak(streak => streak + 1)
    } else {
      console.log("incorrect!");
      setStreak(0);
    }
  }
  return (
    <div className="flashcard-container">
      <Paper className="flashcard" elevation={5}>
        <Fact num1={num1} num2={num2} />
        <AnswerRow submitAnswer={submitAnswer} />
      </Paper>
    </div>
  );
}
