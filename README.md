# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Screenshots
### Large Screen
<img width="1799" height="949" alt="Screenshot 2025-10-22 at 8 15 45 AM" src="https://github.com/user-attachments/assets/a8ae1579-88d2-4779-8f39-9d1cdf56aad5" />

### Medium Screen
<img width="1369" height="825" alt="Screenshot 2025-10-22 at 8 17 46 AM" src="https://github.com/user-attachments/assets/1df3de9b-1fba-4621-8682-108d0005cd73" />

### Ipad Landscape
<img width="1026" height="770" alt="Screenshot 2025-10-22 at 8 19 14 AM" src="https://github.com/user-attachments/assets/c4c27319-8013-4905-aefb-82d9a50b7720" />

### Ipad Portrait
<img width="579" height="772" alt="Screenshot 2025-10-22 at 8 19 51 AM" src="https://github.com/user-attachments/assets/13f7025c-20e1-4818-bcd8-1d84dbb2eecd" />

### Mobile device
<img width="324" height="701" alt="Screenshot 2025-10-22 at 8 21 02 AM" src="https://github.com/user-attachments/assets/015be8d0-246f-4fd4-929a-1dc193667b71" />



The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
