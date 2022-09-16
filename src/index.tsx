import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { store, persistor } from './app/store';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import './index.css';
import './style/style.sass';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <CssBaseline />
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <App />
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
