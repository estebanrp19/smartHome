export const isAuthenticated = (): boolean => {
  const authToken = localStorage.getItem("token");
  return !!authToken; 
};
