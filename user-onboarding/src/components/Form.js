import React from 'react'

export default function Form (props) {
  const { 
      values,
      submit,
      change,
      disabled,
      errors
  } = props

  const onSubmit = e => {
      e.preventDefault();
      submit();
  }

  const onChange = e => {
    const { name, value, checked, type } = e.target
    const realValue = type === 'checkbox' ? checked : value;
    change(name, realValue)
  }

  return(
    <form onSubmit={onSubmit}>
      <div>
        <h2>Sign Up</h2>
        <div className='errors'>{errors.name}</div>
        <label> Name:
        <input
            type='text'
            name='name'
            onChange={onChange}
            value={values.name} 
        />
        </label> 
        <div className='errors'>{errors.email}</div>
        <label> Email:
        <input
            type='email'
            name='email'
            onChange={onChange}
            value={values.email} 
        />
        </label> 
        <div className='errors'>{errors.phoneNumber}</div>
        <label> Phone:  
        <input
            type='text'
            name='phoneNumber'
            onChange={onChange}
            value={values.phoneNumber} 
        />
        </label> 
        <div className='errors'>{errors.password}</div>
        <label> Password: 
        <input
            type='password'
            name='password'
            onChange={onChange}
            value={values.password} 
        />
        </label> 
        <div className='errors'>{errors.tos}</div>
        <label> Accept Terms of Service 
        <input
            type='checkbox'
            name='tos'
            onChange={onChange}
            checked={values.tos}
        />
        </label> 
        <button id='submit' disabled={disabled}>Submit</button>
      </div>
    </form>
  )
}
