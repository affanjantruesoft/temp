export const log = {
  info: (...args) => {
    console.log('[INFO]', ...args);
  },
  error: (...args) => {
    console.error('[ERROR]', ...args);
  },
  warn: (...args) => {
    console.warn('[WARN]', ...args);
  },
  debug: (...args) => {
    if (import.meta.env.DEV) {
      console.log('[DEBUG]', ...args);
    }
  },
};
