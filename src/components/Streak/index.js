import './index.css';

export default function Streak({ streak }) {
  return (
    <div style={{fontSize: '1.5rem', textAlign: 'right', margin: '2rem'}}>
      Streak: {streak}
    </div>
  );
}
