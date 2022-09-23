import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Refs from "./refs";
// require('./style.css');
// import reportWebVitals from './reportWebVitals';
// import Form from './Form.jsx';
// import Event from './Event.jsx';
// import Select from './Select.jsx';
// import AdvanceForm from './AdvanceForm';
// const myFirstElement = <h5>Hello React!!</h5>

// ReactDOM.render(< App col="Pink"/>,document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Refs />
    {/* <Form />
    <Event />
    <Select />
    <AdvanceForm /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
