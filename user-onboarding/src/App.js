import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

import Form from './components/Form';
import schema  from './Validation/formSchema';



function App() {
 const [users, setUsers] = useState([]);
 const [formValues, setFormValues] = useState({
  name: '',
  phoneNumber: '',
  email: '',
  password: '',
  tos: false,
});
 const [formErrors, setFormErrors] = useState({
  name: '',
  phoneNumber: '',
  email: '',
  password: '',
})
  const [disabled, setDisabled] = useState(true);

  




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
