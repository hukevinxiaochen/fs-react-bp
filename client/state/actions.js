// ACTION TYPES
export const THEME_CHANGED = 'THEME_CHANGED';

// ACTION CREATORS
export const changeTheme = (theme) => ({
  type: THEME_CHANGED,
  payload: theme,
});
