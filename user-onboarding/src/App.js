import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

import Form from './components/Form';
import FormDetails from './components/FormDetails';
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
  tos: ''
})
  const [disabled, setDisabled] = useState(true);
  
  const validate = ( name, value ) => {
    yup.reach(schema, name)
       .validate(value)
       .then(() => setFormErrors({ ...formErrors, [name]: ''}))
       .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate( name, value );
    setFormValues({ ...formValues, [name]: value })
  }

  const inputSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      phoneNumber:formValues.phoneNumber.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    setUsers([...users, newUser]);
    axios.post(`https://reqres.in/api/users`, formValues)
      .then(res => setUsers( ...users, res.data))
      .catch(err => console.error(err))
    setFormValues({
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      tos: false,
    });
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <div>
        <Form 
          values={formValues}
          change={inputChange}
          submit={inputSubmit}
          disabled={disabled}
          errors={formErrors}
          />
      </div>
      <h1> Users </h1>

      {users.map(user => {
          return (
            <FormDetails key={user.name} details={user} />
          )
        })
      }

    </div>
  );
}

export default App;
