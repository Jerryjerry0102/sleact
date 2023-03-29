import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from './layouts/App';

import * as ReactDOMClient from 'react-dom/client';

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? 'https://sleact.nodebird.com' : 'http://localhost:3090';

const container = document.getElementById('app');

// 블로그 참조(https://velog.io/@seungmini/TypeScript%EC%97%90-React18-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
if (!container) throw new Error('Failed to find the root element');

// Create a root
const root = ReactDOMClient.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
