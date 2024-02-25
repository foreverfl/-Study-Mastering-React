import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import './index.css';
import App from './App';
import { createLogger } from 'redux-logger';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 개발 환경에서만 로거 미들웨어를 추가
const logger = createLogger();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

