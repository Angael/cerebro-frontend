import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const container = document.getElementById('root');

// Create a root.
// @ts-ignore
const root = ReactDOM.createRoot(container);

// Initial render: Render an element to the root.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
