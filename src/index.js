import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { Provider } from "mobx-react";
import WordsStore from "./components/store/words";

const store = {
  wordsStore: new WordsStore(),
};
ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <Provider {... store}>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
