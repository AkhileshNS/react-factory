import React from 'react';
import ReactDOM from 'react-dom';
import 'global/index.css';
import Store from 'App/App.store';
import App from 'App/App';
import * as serviceWorker from './serviceWorker';

const Final = () => (
  <React.StrictMode>
    <Store.Provider>
      <App />
    </Store.Provider>
  </React.StrictMode>
);

ReactDOM.render(<Final />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
