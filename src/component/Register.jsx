import React, { useState } from 'react';

function Register() {

    const [formField, setFormField] = useState({
        email: "",
        password: "",
        address1: "",
        address2: "",
        city: "",
        zip: "",
    })

    const inputHandler = (event) => {

        const {name, value} = event.target
        
        setFormField((data) => ({
            ...data,
            [name]: value
        }))

    }

    const Submit = (event) => {
        event.preventDefault()
        console.log("Success", formField)
    }

    return (
        <>

<form onSubmit={Submit}>
        <h1>Register</h1>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="text" className="form-control" onChange={inputHandler} value={formField.email} name="email" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" className="form-control"  onChange={inputHandler} value={formField.password} name="password" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" onChange={inputHandler}  value={formField.address1} name="address1" />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control"  onChange={inputHandler} value={formField.address2} name="address2" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control"  onChange={inputHandler} value={formField.city} name="city" />
    </div>
        
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" onChange={inputHandler} value={formField.zip} name="zip" />
    </div>
  </div> 
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
        </>
        
    )
}

export default Register