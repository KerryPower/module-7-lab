export function emojiReducer(state, action) {
    switch (action.type) {
      case 'TOGGLE_MOOD':
        return { isHappy: !state.isHappy };
      default:
        return state;
    }
  }