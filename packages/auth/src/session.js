export const sessionManager = {
  getUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  },

  clearUser: () => {
    localStorage.removeItem('user');
  },

  getToken: () => {
    return localStorage.getItem('authToken');
  },

  isAuthenticated: () => {
    return !!sessionManager.getUser();
  },
};

// Backwards-compatible alias used across the codebase
export const session = sessionManager;
