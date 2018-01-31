import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../public/images/logo.svg';
import './styles/index.scss';

const App = () => (
  <div className="App">
    <img className="App-Logo" src={logo} alt="React Logo" />
    <h1 className="App-Title">Hello I am built with Parcel, React & SCSS</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
