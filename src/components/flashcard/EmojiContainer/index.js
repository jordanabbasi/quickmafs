import './index.css';
import { getEmojiForStreak } from '../../../utils';

export default function EmojiContainer({ show, streak }) {
  return (
    <div className="emoji-container">
      {show ? getEmojiForStreak(streak) : null}
    </div>
  );
}
