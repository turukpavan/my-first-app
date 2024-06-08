import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    //After React version 16.8 introduced hooks in functional component to replicate Class component life cycle behavior

    //Class component Initialization(Constructor and state) => useState hook in Functional component

    //Class component(componentDidMount, componentDidUpdate, componentWillUnmount) => useEffect hook In functional comp

    // useEffect(
    //     ()=>{
    //         //callback function
    //     }, [dependency Array]
    // )
    const[count, setCount] = useState(0)
    const[name, setName]  = useState("Yogita")

    //1.use effect hook with No dependency array - call on every render
    // call on every render // mounting phase + updating phase
    // useEffect(
    //     ()=>{
    //         console.log("Inside useEffect and no dependency array")
    //     }
    // )

    //2. useEffect hook with empty dependency Array
    // call on only first render //mounting phase
    // useEffect(
    //     ()=>{
    //         console.log('Inside useEffect with Empty dependency array')
    //     }, []
    // )

    //3. useEffect hook dependency array
    // call on first render + change on specific dependency or state 
    useEffect(
        ()=>{
           console.log('Inside useEffect hook with Dependency Array')     
        }, [count]
    )

    const incrementCount =() =>{
        console.log('Inside increment count')
        setCount(count+1)
    }

    const changeName =()=>{
        console.log('Inside Change Name')
        setName('Priyanka')
    }
  return (
    <>
       {console.log('Inside return')}
        <h3>Functional Compo UseEffect Hook</h3>
        <h4> Count : {count} </h4> <Button variant="info" onClick={incrementCount}>Increment Count</Button>

        <h4>Name : {name}</h4> <Button variant="success" onClick={changeName}>Change Name</Button>
    </>
  )
}

export default UseEffectHook
