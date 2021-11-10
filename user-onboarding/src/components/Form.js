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
      e.preventDefault()
      submit()
  }

  const onChange = e => {
    const { name, value, checked, type } = e.target
    const realValue = type === 'checked' ? checked : value;
    change(name, realValue)
  }

  return(
    <form onSubmit={onSubmit}>
      <div>
        <h2>Sign Up</h2>
        <div className='errors'>{errors.name}</div>
        <label> Name
        <input
            type='text'
            name='name'
            onChange={onChange}
            value={values.name} 
        />
        </label> 
        <div className='errors'>{errors.email}</div>
        <label> Email
        <input
            type='text'
            name='email'
            onChange={onChange}
            value={values.email} 
        />
        </label> 
        <div className='errors'>{errors.phoneNumber}</div>
        <label> Phone Number
        <input
            type='text'
            name='phoneNumber'
            onChange={onChange}
            value={values.phoneNumber} 
        />
        </label> 
        <div className='errors'>{errors.password}</div>
        <label> Password
        <input
            type='text'
            name='password'
            onChange={onChange}
            value={values.password} 
        />
        </label> 
        <div className='errors'>{errors.tos}</div>
        <label> Terms of Service
        <input
            type='checkbox'
            name='tos'
            onChange={onChange}
            value={values.tos} 
        />
        </label> 
        <button disabled={disabled}>Submit</button>
      </div>
    </form>
  )
}
