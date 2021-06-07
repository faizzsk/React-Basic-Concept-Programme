import React, { useState } from 'react'

function LoginForm() {
   const [form,setValues] =useState({username:"",password:""});
   const onchange=(e)=>{
       setValues({...form,[e.target.name]:e.target.value});
   }
const login=(e)=>{
e.preventDefault();
console.log(`${form.username} ${form.password}`);
alert(form.username);
}

    return (
    
      <form onSubmit={login}>
          <label>UserName:
              <input value={form.username} name="username" onChange={onchange} />
          </label> <br />
          <label>password:
              <input value={form.password} name="password" onChange={onchange} />
          </label> <br/>
          <button>Submit</button>

      </form>
    )
}

export default LoginForm
