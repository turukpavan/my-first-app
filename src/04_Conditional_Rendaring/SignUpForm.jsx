import React from "react";
import './LogInForm.css';

const SignUpForm=()=>{
    return(
        <form action="" className=" d-flex flex-column w-25 m-4 p-3 border border-3  ">
            <h3>SignUp</h3>
            <label htmlFor="name">Name :</label>
            <input type="text" />
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id="" />
            <label htmlFor="Create_Password">Create Password :</label>
            <input type="password" name="" id="" />
            <label htmlFor="Conform_Password">Conform Password :</label>
            <input type="password" name="Conform_Password" id="" />
            <input type="submit" value="SignUp" className="SignUp" />

        </form>
    )
}

export default SignUpForm