import { createContext, useReducer, useContext } from 'react';
import { emojiReducer } from '../EmojiReducer';

const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [state, dispatch] = useReducer(emojiReducer, { isHappy: true });

  const toggleMood = () => {
    dispatch({ type: 'TOGGLE_MOOD' });
  };

  return (
    <MoodContext.Provider value={{ isHappy: state.isHappy, toggleMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export const useMood = () => {
  return useContext(MoodContext);
}