import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import { Coins } from './features/coins/Coins';
import { Rooms } from './features/rooms/Rooms';
import Page from './pages/Page';

function App() {
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/page">Page</Link>
            <Coins />
            <Routes>
                <Route path="/" element={<Rooms />} />
                <Route path="/page" element={<Page />} />
            </Routes>
        </Router>
    );
}

export default App;
