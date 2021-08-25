import './index.css';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeOnIcon from '@material-ui/icons/VolumeUp';

export default function Streak({ streak, muted, setMuted }) {
  return (
    <div style={{fontSize: '1.5rem', textAlign: 'right', margin: '2rem'}}>
      <span>
        Streak: {streak}
      </span>
      <span onClick={() => {setMuted(muted => !muted)}} className="mute-icon">
        {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
      </span>
    </div>
  );
}
