import React, { useState } from 'react'
// Higher-Order Component
const withLogging = (WrappedComponent) => {
        return (props) => {
            console.log(`Rendering ${WrappedComponent.name}`);
            return <WrappedComponent {...props} />;
        };
    };
// Example Wrapped Component
function HelloWorld({ name }) {
        return <h1>Hello, {name}!</h1>;
    }
    
    // Enhanced Component with Logging
    const HelloWorldWithLogging = withLogging(HelloWorld);
//parent component
const higherOrderComp = () => {
    const [show, setShow] = useState(true);
  return (
    <div>
        <button onClick={() => setShow((prev) => !prev)}>
            Toggle HelloWorld Component
        </button>
        {show && <HelloWorldWithLogging name="Roshan Reji" />}
    </div>
  )
}

export default higherOrderComp;