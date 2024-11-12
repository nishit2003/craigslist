import './app.css'
import App from './App.svelte'
// src/main.js

import './styles/global.css'; // Ensure this path is correct based on your project structure

const app = new App({
  target: document.getElementById('app')
});

export default app
