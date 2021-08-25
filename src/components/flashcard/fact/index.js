import './index.css';

export default function Fact({num1, num2}) {
  return (
    <div className="fact-container">
      <p className="fact-text">{num1} + {num2}</p>
    </div>
  );
}
