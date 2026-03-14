// // Notice how the moment you stop rendering the second counter, its state disappears completely. That’s because when React removes a component, it destroys its state.
// // Diagram of a tree of React components. The root node is labeled 'div' and has two children. The left child is labeled 'Counter' and contains a state bubble labeled 'count' with value 0. The right child is missing, and in its place is a yellow 'poof' image, highlighting the component being deleted from the tree.

// import { useState } from 'react';

// export default function App() {
//   const [showB, setShowB] = useState(true);
//   return (
//     <div>
//       <Counter />
//       {showB && <Counter />} 
//       <label>
//         <input
//           type="checkbox"
//           checked={showB}
//           onChange={e => {
//             setShowB(e.target.checked)
//           }}
//         />
//         Render the second counter
//       </label>
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }
//its position in the ui tree that determines whether its state is preserved or not. If you remove a component from the tree, its state is lost. If you keep it in the tree but just hide it, its state is preserved.
//also if you change something in the jsx markup but keep the component in the same position, its state is preserved. For example, if you change the text of a button but keep it in the same place in the tree, its state will not be lost.

// import { useState } from 'react';

// export default function App() {
//   const [isFancy, setIsFancy] = useState(false);
//   if (isFancy) {
//     return (
//       <div>
//         <Counter isFancy={true} />
//         <label>
//           <input
//             type="checkbox"
//             checked={isFancy}
//             onChange={e => {
//               setIsFancy(e.target.checked)
//             }}
//           />
//           Use fancy styling
//         </label>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <Counter isFancy={false} />
//       <label>
//         <input
//           type="checkbox"
//           checked={isFancy}
//           onChange={e => {
//             setIsFancy(e.target.checked)
//           }}
//         />
//         Use fancy styling
//       </label>
//     </div>
//   );
// }

// function Counter({ isFancy }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }
//   if (isFancy) {
//     className += ' fancy';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }


//Different components at the same position reset state 
// import { useState } from 'react';

// export default function App() {
//   const [isFancy, setIsFancy] = useState(false);
//   return (
//     <div>
//       {isFancy ? (
//         <Counter isFancy={true} />
//       ) : (
//         <Counter isFancy={false} />
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isFancy}
//           onChange={e => {
//             setIsFancy(e.target.checked)
//           }}
//         />
//         Use fancy styling
//       </label>
//     </div>
//   );
// }

// function Counter({ isFancy }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }
//   if (isFancy) {
//     className += ' fancy';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }


// # React: Resetting State at the Same Position

// ## 1. React preserves state by default
// - React keeps a component’s state as long as it **stays at the same position** in the UI tree.
// - This is usually desired behavior.

// ---

// ## 2. Problem scenario
// - Example: a scoreboard for two players using the same `<Counter />` component.
// - JSX may conditionally render different players:
// ```jsx
// {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}



