import React from 'react';
import './login.css';

function login() {

     return (
    
    <div style={{
      position: 'absolute', left: '60%', top: '50%',
      transform: 'translate(-70%, -70%)',
 }} class="square">
   
 
<div class="v1"></div>
    <form >
   
 
      <label htmlFor="email">User Name</label>
      <input
        id="userName"
        name="userName"
        type="text"
        placeholder="Enter your User Name"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />

      <button type="submit"  type="button" >
        Login
      </button>
    

 
    </form>
    </div>
  );

}




export default login;