import React from 'react'
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';



const ConditionalRendating = () => {
  let temp;
  if(temp==='true'){
    return <LogInForm/>
  }else{
    return <SignUpForm/>
  }
  
}

export default ConditionalRendating
let temp=prompt("Already have an account say true or false")
console.log(temp);