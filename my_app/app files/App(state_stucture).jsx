// Group related state. If you always update two or more state variables at the same time, consider merging them into a single state variable.

// import { useState } from 'react';

// export default function MovingDot() {
//     //update the x,y at the same time, so we can group them together in a single state variable
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   )
// }




// // Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [text, setText] = useState('');
//   const [status, setStatus] = useState('typing');

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('sending');
//     await sendMessage(text);
//     setStatus('sent');
//   }

//   const isSending = status === 'sending';
//   const isSent = status === 'sent';

//   if (isSent) {
//     return <h1>Thanks for feedback!</h1>
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at The Prancing Pony?</p>
//       <textarea
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <br />
//       <button
//         disabled={isSending}
//         type="submit"
//       >
//         Send
//       </button>
//       {isSending && <p>Sending...</p>}
//     </form>
//   );
// }

// // Pretend to send a message.
// function sendMessage(text) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }
// Since isSending and isSent should never be true at the same time, it is better to replace them with one status state variable that may take one of three valid states: 'typing' (initial), 'sending', and 'sent':

// import { useState } from 'react';



//replace this


// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [fullName, setFullName] = useState('');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//     setFullName(e.target.value + ' ' + lastName);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//     setFullName(firstName + ' ' + e.target.value);
//   }


//as full name can be calculated from firstName and lastName, we can avoid putting it into state and just calculate it during rendering. This way we avoid redundant state and also avoid the risk of them getting out of sync.

// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const fullName = firstName + ' ' + lastName;

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name:{' '}
//         <input
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:{' '}
//         <input
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }



// Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.

// import { useState } from 'react';

// const initialItems = [
//   { title: 'pretzels', id: 0 },
//   { title: 'crispy seaweed', id: 1 },
//   { title: 'granola bar', id: 2 },
// ];

// export default function Menu() {
//   const [items, setItems] = useState(initialItems);
//   const [selectedId, setSelectedId] = useState(0);

//   const selectedItem = items.find(item =>
//     item.id === selectedId
//   );

//   function handleItemChange(id, e) {
//     setItems(items.map(item => {
//       if (item.id === id) {
//         return {
//           ...item,
//           title: e.target.value,
//         };
//       } else {
//         return item;
//       }
//     }));
//   }

//   return (
//     <>
//       <h2>What's your travel snack?</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <input
//               value={item.title}
//               onChange={e => {
//                 handleItemChange(item.id, e)
//               }}
//             />
//             {' '}
//             <button onClick={() => {
//               setSelectedId(item.id);
//             }}>Choose</button>
//           </li>
//         ))}
//       </ul>
//       <p>You picked {selectedItem.title}.</p>
//     </>
//   );
// }





// Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.


// export const initialTravelPlan = {
//   id: 0,
//   title: '(Root)',
//   childPlaces: [{
//     id: 1,
//     title: 'Earth',
//     childPlaces: [{
//       id: 2,
//       title: 'Africa',
//       childPlaces: [{
//         id: 3,
//         title: 'Botswana',
//         childPlaces: []
//       }, {
//         id: 4,
//         title: 'Egypt',
//         childPlaces: []
//       }, {
//         id: 5,
//         title: 'Kenya',
//         childPlaces: []
//       }, {
//         id: 6,
//         title: 'Madagascar',
//         childPlaces: []
//       }, {
//         id: 7,
//         title: 'Morocco',
//         childPlaces: []
//       }, {
//         id: 8,
//         title: 'Nigeria',
//         childPlaces: []
//       }, {
//         id: 9,
//         title: 'South Africa',
//         childPlaces: []
//       }]
//     }, {
//       id: 10,
//       title: 'Americas',
//       childPlaces: [{
//         id: 11,
//         title: 'Argentina',
//         childPlaces: []
//       }, {
//         id: 12,
//         title: 'Brazil',
//         childPlaces: []
//       }, {
//         id: 13,
//         title: 'Barbados',
//         childPlaces: []
//       }, {
//         id: 14,
//         title: 'Canada',
//         childPlaces: []
//       }, {
//         id: 15,
//         title: 'Jamaica',
//         childPlaces: []
//       }, {
//         id: 16,
//         title: 'Mexico',
//         childPlaces: []
//       }, {
//         id: 17,
//         title: 'Trinidad and Tobago',
//         childPlaces: []
//       }, {
//         id: 18,
//         title: 'Venezuela',
//         childPlaces: []
//       }]
//     }, {
//       id: 19,
//       title: 'Asia',
//       childPlaces: [{
//         id: 20,
//         title: 'China',
//         childPlaces: []
//       }, {
//         id: 21,
//         title: 'India',
//         childPlaces: []
//       }, {
//         id: 22,
//         title: 'Singapore',
//         childPlaces: []
//       }, {
//         id: 23,
//         title: 'South Korea',
//         childPlaces: []
//       }, {
//         id: 24,
//         title: 'Thailand',
//         childPlaces: []
//       }, {
//         id: 25,
//         title: 'Vietnam',
//         childPlaces: []
//       }]
//     }, {
//       id: 26,
//       title: 'Europe',
//       childPlaces: [{
//         id: 27,
//         title: 'Croatia',
//         childPlaces: [],
//       }, {
//         id: 28,
//         title: 'France',
//         childPlaces: [],
//       }, {
//         id: 29,
//         title: 'Germany',
//         childPlaces: [],
//       }, {
//         id: 30,
//         title: 'Italy',
//         childPlaces: [],
//       }, {
//         id: 31,
//         title: 'Portugal',
//         childPlaces: [],
//       }, {
//         id: 32,
//         title: 'Spain',
//         childPlaces: [],
//       }, {
//         id: 33,
//         title: 'Turkey',
//         childPlaces: [],
//       }]
//     }, {
//       id: 34,
//       title: 'Oceania',
//       childPlaces: [{
//         id: 35,
//         title: 'Australia',
//         childPlaces: [],
//       }, {
//         id: 36,
//         title: 'Bora Bora (French Polynesia)',
//         childPlaces: [],
//       }, {
//         id: 37,
//         title: 'Easter Island (Chile)',
//         childPlaces: [],
//       }, {
//         id: 38,
//         title: 'Fiji',
//         childPlaces: [],
//       }, {
//         id: 39,
//         title: 'Hawaii (the USA)',
//         childPlaces: [],
//       }, {
//         id: 40,
//         title: 'New Zealand',
//         childPlaces: [],
//       }, {
//         id: 41,
//         title: 'Vanuatu',
//         childPlaces: [],
//       }]
//     }]
//   }, {
//     id: 42,
//     title: 'Moon',
//     childPlaces: [{
//       id: 43,
//       title: 'Rheita',
//       childPlaces: []
//     }, {
//       id: 44,
//       title: 'Piccolomini',
//       childPlaces: []
//     }, {
//       id: 45,
//       title: 'Tycho',
//       childPlaces: []
//     }]
//   }, {
//     id: 46,
//     title: 'Mars',
//     childPlaces: [{
//       id: 47,
//       title: 'Corn Town',
//       childPlaces: []
//     }, {
//       id: 48,
//       title: 'Green Hill',
//       childPlaces: []      
//     }]
//   }]
// };

//if you want to update a place, you have to find it in the tree and update it immutably, which is a bit of work. Instead, we can flatten the data structure and keep all places in a single array. This way we can easily find and update any place by its id:


//below is the same data as above, but flattened. Each place has a childIds array that lists the IDs of its children. This way we can easily find and update any place by its id, without having to traverse the tree structure.

// export const initialTravelPlan = {
//   0: {
//     id: 0,
//     title: '(Root)',
//     childIds: [1, 42, 46],
//   },
//   1: {
//     id: 1,
//     title: 'Earth',
//     childIds: [2, 10, 19, 26, 34]
//   },
//   2: {
//     id: 2,
//     title: 'Africa',
//     childIds: [3, 4, 5, 6 , 7, 8, 9]
//   }, 
//   3: {
//     id: 3,
//     title: 'Botswana',
//     childIds: []
//   },
//   4: {
//     id: 4,
//     title: 'Egypt',
//     childIds: []
//   },
//   5: {
//     id: 5,
//     title: 'Kenya',
//     childIds: []
//   },
//   6: {
//     id: 6,
//     title: 'Madagascar',
//     childIds: []
//   }, 
//   7: {
//     id: 7,
//     title: 'Morocco',
//     childIds: []
//   },
//   8: {
//     id: 8,
//     title: 'Nigeria',
//     childIds: []
//   },
//   9: {
//     id: 9,
//     title: 'South Africa',
//     childIds: []
//   },
//   10: {
//     id: 10,
//     title: 'Americas',
//     childIds: [11, 12, 13, 14, 15, 16, 17, 18],   
//   },
//   11: {
//     id: 11,
//     title: 'Argentina',
//     childIds: []
//   },
//   12: {
//     id: 12,
//     title: 'Brazil',
//     childIds: []
//   },
//   13: {
//     id: 13,
//     title: 'Barbados',
//     childIds: []
//   }, 
//   14: {
//     id: 14,
//     title: 'Canada',
//     childIds: []
//   },
//   15: {
//     id: 15,
//     title: 'Jamaica',
//     childIds: []
//   },
//   16: {
//     id: 16,
//     title: 'Mexico',
//     childIds: []
//   },
//   17: {
//     id: 17,
//     title: 'Trinidad and Tobago',
//     childIds: []
//   },
//   18: {
//     id: 18,
//     title: 'Venezuela',
//     childIds: []
//   },
//   19: {
//     id: 19,
//     title: 'Asia',
//     childIds: [20, 21, 22, 23, 24, 25],   
//   },
//   20: {
//     id: 20,
//     title: 'China',
//     childIds: []
//   },
//   21: {
//     id: 21,
//     title: 'India',
//     childIds: []
//   },
//   22: {
//     id: 22,
//     title: 'Singapore',
//     childIds: []
//   },
//   23: {
//     id: 23,
//     title: 'South Korea',
//     childIds: []
//   },
//   24: {
//     id: 24,
//     title: 'Thailand',
//     childIds: []
//   },
//   25: {
//     id: 25,
//     title: 'Vietnam',
//     childIds: []
//   },
//   26: {
//     id: 26,
//     title: 'Europe',
//     childIds: [27, 28, 29, 30, 31, 32, 33],   
//   },
//   27: {
//     id: 27,
//     title: 'Croatia',
//     childIds: []
//   },
//   28: {
//     id: 28,
//     title: 'France',
//     childIds: []
//   },
//   29: {
//     id: 29,
//     title: 'Germany',
//     childIds: []
//   },
//   30: {
//     id: 30,
//     title: 'Italy',
//     childIds: []
//   },
//   31: {
//     id: 31,
//     title: 'Portugal',
//     childIds: []
//   },
//   32: {
//     id: 32,
//     title: 'Spain',
//     childIds: []
//   },
//   33: {
//     id: 33,
//     title: 'Turkey',
//     childIds: []
//   },
//   34: {
//     id: 34,
//     title: 'Oceania',
//     childIds: [35, 36, 37, 38, 39, 40, 41],   
//   },
//   35: {
//     id: 35,
//     title: 'Australia',
//     childIds: []
//   },
//   36: {
//     id: 36,
//     title: 'Bora Bora (French Polynesia)',
//     childIds: []
//   },
//   37: {
//     id: 37,
//     title: 'Easter Island (Chile)',
//     childIds: []
//   },
//   38: {
//     id: 38,
//     title: 'Fiji',
//     childIds: []
//   },
//   39: {
//     id: 39,
//     title: 'Hawaii (the USA)',
//     childIds: []
//   },
//   40: {
//     id: 40,
//     title: 'New Zealand',
//     childIds: []
//   },
//   41: {
//     id: 41,
//     title: 'Vanuatu',
//     childIds: []
//   },
//   42: {
//     id: 42,
//     title: 'Moon',
//     childIds: [43, 44, 45]
//   },
//   43: {
//     id: 43,
//     title: 'Rheita',
//     childIds: []
//   },
//   44: {
//     id: 44,
//     title: 'Piccolomini',
//     childIds: []
//   },
//   45: {
//     id: 45,
//     title: 'Tycho',
//     childIds: []
//   },
//   46: {
//     id: 46,
//     title: 'Mars',
//     childIds: [47, 48]
//   },
//   47: {
//     id: 47,
//     title: 'Corn Town',
//     childIds: []
//   },
//   48: {
//     id: 48,
//     title: 'Green Hill',
//     childIds: []
//   }
// };


// import { useState } from 'react';
// import { initialTravelPlan } from './places.js';

// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);

//   function handleComplete(parentId, childId) {
//     const parent = plan[parentId];
//     // Create a new version of the parent place
//     // that doesn't include this child ID.
//     const nextParent = {
//       ...parent,
//       childIds: parent.childIds
//         .filter(id => id !== childId)
//     };
//     // Update the root state object...
//     setPlan({
//       ...plan,
//       // ...so that it has the updated parent.
//       [parentId]: nextParent
//     });
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map(id => (
//           <PlaceTree
//             key={id}
//             id={id}
//             parentId={0}
//             placesById={plan}
//             onComplete={handleComplete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

// function PlaceTree({ id, parentId, placesById, onComplete }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       <button onClick={() => {
//         onComplete(parentId, id);
//       }}>
//         Complete
//       </button>
//       {childIds.length > 0 &&
//         <ol>
//           {childIds.map(childId => (
//             <PlaceTree
//               key={childId}
//               id={childId}
//               parentId={id}
//               placesById={placesById}
//               onComplete={onComplete}
//             />
//           ))}
//         </ol>
//       }
//     </li>
//   );
// }


