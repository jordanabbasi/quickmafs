import './index.css';

export default function Fact({ nums }) {
  return (
    <div className="fact-container">
      <p className="fact-text">{nums[0]} + {nums[1]}</p>
    </div>
  );
}
