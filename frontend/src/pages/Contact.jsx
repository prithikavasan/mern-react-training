import React from 'react'
import {useState} from 'react'
const Contact = () => {
  const[form,setForm] = useState(
    {
      name:"",
      email:"",
      password:"",
      confirmpassword:"",
      dept:""
    }
  )
  const handleChange=(e)=>{
    const {name,value}=e.target
    setForm((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form)
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange}></input>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange}></input>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange}></input>

        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input type="password" name="confirmpassword" value={form.confirmpassword} onChange={handleChange}></input>

        <label htmlFor="dept">Department:</label>
        <input type="text" name="dept" value={form.dept} onChange={handleChange}></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact