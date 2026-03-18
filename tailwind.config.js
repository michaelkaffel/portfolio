/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        moss: {
          deep: 'var(--moss-bg-deep)',
          base: 'var(--moss-bg-base)',
          surface: 'var(--moss-bg-surface)',
          elevated: 'var(--moss-bg-elevated)',
        },
        'moss-border': {
          DEFAULT: 'var(--moss-border)',
          subtle: 'var(--moss-border-subtle)',
        },
        'moss-text': {
          primary: 'var(--moss-text-primary)',
          secondary: 'var(--moss-text-secondary)',
          tertiary: 'var(--moss-text-tertiary)',
          muted: 'var(--moss-text-muted)',
        },
        'moss-green': {
          DEFAULT: 'var(--moss-green)',
          bright: 'var(--moss-green-bright)',
        },
        'moss-amber': {
          DEFAULT: 'var(--moss-amber)',
          bright: 'var(--moss-amber-bright)',
        },
      }
    },
  },
  plugins: [],
}

