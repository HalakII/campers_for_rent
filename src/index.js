import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './reduxConfig/store';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/index.css';
import 'typeface-inter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <BrowserRouter basename="/campers_for_rent">
        <App />
      </BrowserRouter>
    </Provider>
  </>
);
