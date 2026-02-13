import { io } from 'socket.io-client';

let socket = null;

export const socketManager = {
  connect: (url, options = {}) => {
    if (!socket) {
      socket = io(url, options);
    }
    return socket;
  },

  disconnect: () => {
    if (socket) {
      socket.disconnect();
      socket = null;
    }
  },

  emit: (event, data) => {
    if (socket) {
      socket.emit(event, data);
    }
  },

  on: (event, callback) => {
    if (socket) {
      socket.on(event, callback);
    }
  },

  off: (event, callback) => {
    if (socket) {
      socket.off(event, callback);
    }
  },

  getSocket: () => socket,
};
