/* global window */
import { THEME_CHANGED } from './actions';

// check the system for a preferred light or dark setting
let initialTheme;
const userSettingsPreferDarkTheme = window.matchMedia(
  '(prefers-color-scheme: dark)'
);

if (userSettingsPreferDarkTheme.matches) initialTheme = 'dark';
else initialTheme = 'light';

export const reducer = (state = { theme: initialTheme }, action) => {
  switch (action.type) {
    case THEME_CHANGED:
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

export default reducer;
