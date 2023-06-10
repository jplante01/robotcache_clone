## Grid layouts with tailwind

The default tailwind theme provides pre-built utility classes that create basic grids of up to twelve equal tracks(rows or columns). To create more complex grids, one must create it in a theme, or extend the default theme. I chose to extend the default theme as follows:

*tailwind.config.js*
```diff
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
+      gridTemplateColumns: {
+        layout: '80px 1fr auto;',
+      },
    },
  },
  plugins: [],
};
```
