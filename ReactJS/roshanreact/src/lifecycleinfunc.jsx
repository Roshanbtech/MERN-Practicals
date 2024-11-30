import React, { useEffect, useState } from 'react';

export function Appc(props) {

  useEffect(() => {
    console.log('comp mounted');
    console.log('comp updated');

    return () => {
      console.log('comp unmount');
    };
  }, []); // Empty dependency array means this effect runs once when mounted and cleaned up on unmount

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>

    </div>
  );
}

export default Appc