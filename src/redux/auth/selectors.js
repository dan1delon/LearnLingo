export const selectUser = state => state.auth.user;
export const selectUserName = state =>
  state.auth.user ? state.auth.user.displayName : null;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
