import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import CssBaseline from '@mui/material/CssBaseline';

import { store, persistor } from './app/store';
import App from './components/App';
import './style/style.sass';

import common_pt_br from "./translations/pt-br/common.json";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";


i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            common: common_en
        },
        es: {
            common: common_es
        },
        pt: {
            common: common_pt_br
        },
    },
});

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <CssBaseline />
        <I18nextProvider i18n={i18next}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <App />
                    </Router>
                </PersistGate>
            </Provider>
        </I18nextProvider>
    </React.StrictMode>
);
