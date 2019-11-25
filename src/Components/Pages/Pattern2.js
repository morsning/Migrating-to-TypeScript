import React, { useState } from 'react'

const myStyle = {
    examples: { 
        border: '2px solid black',
        padding: '20px',
        marginBottom: '10px'
    },
    infoText: {
        maxWidth: '70%' 
    }
}

export const Pattern2 = (props) => {

    const [count, setCount] = useState(props.currentCount);

    const handleIncrease = () => {
        setCount(count + 1)
    }

    console.log("rendered again")
    return (
        <React.Fragment>
            <section style={myStyle.infoText}>
                <h1>In this demo/pattern we are not using the useEffect hook at all</h1>
                <p>we do however set the initial value of our state variable: count to be props.currentCount.
                    The behaviour of this pattern makes the internal state: count remain the same even after we submit the 
                    internal value to the parent through the updater function.
                    Even though this child component re-renders as an effect of the parent setting its state this component
                    is still mounted and its state remains the same.
                    If we however browse to a different page of our demo application and back again the state: count will be
                    initialized with the value of application level state through props.currentCount.
                </p>
            </section>
            <p>Component level counter: {count}</p>
            <p>Counter passed down from our App state: {props.currentCount}</p>
            <button onClick={() => {handleIncrease()}}>increase</button>
            <button onClick={() => {props.onCountSubmit(count)}}>submit to parent</button>
        </React.Fragment>
    )
}