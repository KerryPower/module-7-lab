import { useMood } from '../context/EmojiContext';

export default function Emoji() {
  const { isHappy, toggleMood } = useMood();

  return (
    <div>
      <h2>Emoji Changer Component</h2>
      <div style={{ fontSize: '3rem' }}>{isHappy ? '😊' : '😞'}</div>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}