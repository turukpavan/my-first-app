import React from "react";
import Card from "../Props/Card";
import ClassCompCall from "./ClassCompCall";
import FuncCompCall from './FuncCompCall';


const WelcomeCompCall =() =>{
    const name="Pavan";

    let person={
        name:"kishor",
        age:"24",
        address:"pune"
    }
    return(
        <>
        <h1>Welcome to WelcomeCompCall</h1>

        <ClassCompCall myName={name} companyName="Infosis" personObj={person}/>
        <FuncCompCall myName={name}/>

        <Card title="card 1" description="this is description"/>
        <Card title="card 2" description="this is description"/>
        <Card title="card 3" description="this is description"/>

        </>


    )


}

export default WelcomeCompCall;

