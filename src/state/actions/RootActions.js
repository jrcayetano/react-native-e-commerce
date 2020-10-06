export const RootActionType = {
  LOGOUT: '[APP GENERAL - LOGOUT]',
};

export const logout = () => ({
  type: RootActionType.LOGOUT,
});
