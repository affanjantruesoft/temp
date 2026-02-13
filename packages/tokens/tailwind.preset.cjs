module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          darkest: 'var(--color-primary-darkest)',
          dark: 'var(--color-primary-dark)',
          medium: 'var(--color-primary-medium)',
          light: 'var(--color-primary-light)',
          lighter: 'var(--color-primary-lighter)',
          lightest: 'var(--color-primary-lightest)',
        },
        secondary: {
          white: 'var(--color-white)',
          'gray-lightest': 'var(--color-gray-lightest)',
          'gray-light': 'var(--color-gray-light)',
          'gray-dark': 'var(--color-gray-dark)',
          black: 'var(--color-black)',
        },
        status: {
          review: 'var(--color-status-review)',
          draft: 'var(--color-status-draft)',
        },
        priority: {
          high: 'var(--color-priority-high)',
          medium: 'var(--color-priority-medium)',
          low: 'var(--color-priority-low)',
        },
      },
    },
  },
};
