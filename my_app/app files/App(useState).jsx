//responding to events 
import "./App.css"


// function Counter(){
//     const [count,setCount] = useState(0);

//     return (


//         <button onClick={()=> setCount(count+1)}>
           
//         Click me {count}</button>
//     );

// };
// export default function counterApp(){
//     return(
//         <div>
//             <h1>Counter App</h1>
//             <Counter/>
//         </div>
//     );
// }


// import { sculptureList } from './data/data.js';
// import { useState } from 'react';

// function SculptureDescription({sculpture}) {
//     return(
//         <p>{sculpture.description}</p>
//     );
//     }

// state is isolated and private to the component that defines it. It cannot be directly accessed or modified by any other component. Instead, a component can pass down state values and functions to update that state as props to its child components, allowing for controlled interaction and data flow between components.
// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showmore, setShowMore] = useState(false);

//   function handleClick() {
//     if (index === sculptureList.length - 1) {
//       setIndex(0);
//     } else {
//       setIndex(index + 1);
//     }
//   }
//   function handleShowMore() {
//     setShowMore(!showmore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
      
//       <button onClick={handleShowMore}>
//         {showmore ? 'hide': 'Show'} details
       
//       </button>
//       <p>
//         {showmore && <SculptureDescription sculpture={sculpture}/>}
//         </p>
//     </>
//   );
// }



// import { useState } from 'react';

// export default function Form() {
//   const [firstName,setfirstName] = useState('');
//   const [lastName,setlastName] = useState('');


//   function handleFirstNameChange(e) {
//     setfirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setlastName(e.target.value);
//   }

//   function handleReset() {
//     setfirstName('');
//     setlastName('');
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }



