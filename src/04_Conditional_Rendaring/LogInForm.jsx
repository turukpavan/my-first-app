import React from "react";
import './LogInForm.css';


const LogInForm = () => {
  return (
    <form className="logIn d-flex flex-column mx-4 p-3 w-25 border rounded border-3  ">
        <h3>Enter LogIn Details</h3>
        <label htmlFor="text">UserName :</label>
        <input type="text" />
        <label htmlFor="password">Password :</label>
        <input type="password" name="" id="" />
        <input type="submit" value="LogIn" className="LogIn "/>

    </form>
  )
}

export default LogInForm
