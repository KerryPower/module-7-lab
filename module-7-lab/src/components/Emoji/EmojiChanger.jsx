import { useMood } from '../context/EmojiContext';
import { Button } from '@mui/material';

export default function Emoji() {
  const { isHappy, toggleMood } = useMood();

  return (
    <div>
      <h2>Emoji Changer Component</h2>
      <div style={{ fontSize: '3rem' }}>{isHappy ? '😊' : '😞'}</div>
      <Button variant="contained" onClick={toggleMood}>Change Mood</Button>
    </div>
  );
}