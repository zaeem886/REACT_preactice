import Image from './Image.jsx';
//state as a snapshot of a component's data at a specific point in time. It represents the current values of the component's properties and can be used to determine how the component should render and behave. When the state changes, React re-renders the component to reflect the updated state, allowing for dynamic and interactive user interfaces.
//A state variable’s value never changes within a render, even if its event handler’s code is asynchronous. Inside that render’s onClick, the value of number continues to be 0 even after setNumber(number + 5) was called. Its value was “fixed” when React “took the snapshot” of the UI by calling your component.

import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}


